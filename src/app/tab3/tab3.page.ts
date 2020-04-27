import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { CovidService } from '../covid.service';
import { MapsAPILoader } from '@agm/core';
import { google } from 'google-maps';
import { NgxSpinnerService } from "ngx-spinner";

declare var google: any;
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom: number;
  minZoom: number;
  markers: any = [];
  TrackedData: any;
  NearCaseCount: number;
  NearestDistance: any;

  searchValue: String;
  @ViewChild('search', null)
  public searchElementRef: ElementRef;

  private geoCoder;

  address: any;

  constructor(private apiService: CovidService, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,private spinner: NgxSpinnerService) {

  }

  ngOnInit() {
    //load Places Autocomplete

    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["geocode"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          //set latitude, longitude and zoom
          if (place.geometry.location != undefined) {
            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
            this.getTrackNearMeData();
          } else {
            this.setCurrentLocation();
          }


        });
      });
    });
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        // console.log(this.latitude,this.longitude);
        this.getTrackNearMeData();
      });
    }
  }
  getTrackNearMeData() {
    this.markers = [];
    this.NearestDistance = null;
    this.NearCaseCount = 0;
    this.zoom = 12;
    this.minZoom = 3;
    this.spinner.show();
    this.apiService.getTrackNearMeData(this.latitude, this.longitude).subscribe((data: any) => {
      if (data.status) {
        this.spinner.hide();
        this.TrackedData = data.result;
        this.NearCaseCount = this.TrackedData.length;
        // console.log(this.NearCaseCount);
        if (this.TrackedData != 0) {
          this.TrackedData.forEach(user => {
            this.markers.push(
              {
                distance: this.distanceFinding(this.latitude, this.longitude, user.geometry.coordinates[0], user.geometry.coordinates[1]),
                lat: user.geometry.coordinates[0],
                lng: user.geometry.coordinates[1],
                // label: '542',
                draggable: false,
                content: this.distanceFinding(this.latitude, this.longitude, user.geometry.coordinates[0], user.geometry.coordinates[1]) + " KM",
                isShown: false,
                icon: './assets/icon/map.png'
              })
          });
          // console.log(this.markers);
          this.NearestDistance = Math.min.apply(null, this.markers.map(item =>
            item.distance
          ));
          this.markers.forEach((item1, i) => {
            // console.log(i);
            let checkCount = this.markers.filter((item2) => {
              if (item2.lng === item1.lng)
                return item2
            });
            this.markers[i]['count'] = checkCount.length;

            // console.log(checkCount.length)
          });
        }
        // console.log(this.markers);
      }
      this.markers.push({
        lat: this.latitude,
        lng: this.longitude,
        // label: '542',
        draggable: false,
        content: 'Me',
        isShown: false,
        icon: './assets/icon/myMaps.png'
      })
    })
  }
  distanceFinding(lat1, lon1, lat2, lon2) {
    var R = 6371; // km (change this constant to get miles)
    var dLat = (lat2 - lat1) * Math.PI / 180;
    var dLon = (lon2 - lon1) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    // console.log(d);
    return Math.round(d * 100) / 100;
    // if (d>1) return Math.round(d*100)/100+" KM";
    // else if (d<=1) return Math.round(d*1000)+" M";
    // return d;
  }
  checkSearchText() {
    // console.log(this.searchValue);
    if (this.searchValue == '')
      this.setCurrentLocation();

  }
}
