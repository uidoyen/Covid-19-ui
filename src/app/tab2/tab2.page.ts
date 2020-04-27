import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';
import { Chart } from 'chart.js';
import * as moment from 'moment/moment';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  countries: any = null;
  // searchCountry: any;
  selectedCountry: String;
  breakdowns: any = null;
  mapsvg: any = null;
  infopanel: any = null;

  dataDisplay: boolean = false;

  public lineChart: any = null;
  info: any = [];
  currentSelected: Number = null;
  columns = [
    {
      prop: 'provinceOrState',
      name: 'Province/State',
    },
    {
      prop: 'totalConfirmedCases',
      name: 'Total Confirmed',
    },
    {
      prop: 'newlyConfirmedCases',
      name: 'Newly Confirmed',
    },
    {
      prop: 'totalDeaths',
      name: 'Total Deaths',
    },
    // { prop: 'New Deaths', name: 'newDeaths' },
    { prop: 'totalRecoveredCases', name: 'Total Recovered' },
  ];
  p: number = 1;

  reverse: boolean;
  order: string = "provinceOrState";
  countryNameConfirmed: any;
  totalConfirmedCases: any;
  totalDeaths: any;
  totalRecoveredCases: any;
  selectedItem: any;

  constructor(
    private covidService: CovidService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.covidByCountries();
  }
  // ngOnChanges(){

  // }
  pagination(event) {
    this.p = event;
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
  covidByCountries() {
    this.spinner.show();
    let that = this;
    this.covidService.getAll().subscribe((data: any) => {
      this.spinner.hide();
      if (data.result) {
        this.countries = data.result.stats.breakdowns.filter((item) => {
          return item.isStateLevalData === true;
        });
        // console.log(this.countries)
        that.handleCountryItemClick(this.countries[0], 0);
      }
    });
  }

  handleCountryItemClick(item, index) {
    this.currentSelected = index;
    let that = this;
    // console.log(item);
    this.selectedItem=item;
    this.selectedCountry = item.location.isoCode;

    this.countryNameConfirmed = this.selectedItem.location.countryOrRegion;
    this.totalConfirmedCases = this.selectedItem.totalConfirmedCases;
    this.totalRecoveredCases = this.selectedItem.totalRecoveredCases;
    this.totalDeaths = this.selectedItem.totalDeaths;
    this.spinner.show();

    this.covidService
      .getCovidByState(item.location.isoCode)
      .subscribe((data: any) => {
        if (data.result) {
          this.info = data.result.stats;
          // console.log(this.info);
          this.spinner.hide();

          this.breakdowns = data.result.stats.breakdowns.map((row) => {
            return {
              ...row,
              isoCode: row['location']['isoCode'],
              provinceOrState: row['location']['provinceOrState'],
            };
          });
          if (this.selectedCountry == "IN") this.breakdowns.splice(0, 1);
          // console.log(this.breakdowns);
          this.displayLineChart();
          that.highlightonLoad();
        }
      });
  }

  highlightonLoad() {
    var temp_array = this.breakdowns.map(function (item) {
      return item.totalConfirmedCases;
    });
    for (var i = 0; i < this.breakdowns.length; i++) {
      if (this.breakdowns[i].location.isoCode === null) {
        // console.log(this.breakdowns[i].location.isoCode);
        continue;
      } else {
        // console.log(this.breakdowns[i]);
        // console.log(this.breakdowns[i].location.isoCode);

        let elm = document.getElementById(this.breakdowns[i].location.isoCode);
        let fact = temp_array[i] / 150;

        let r = 255;
        let g = 189 - fact;
        let b = 189 - fact;
        if (this.breakdowns[i].location.isoCode != 'IN-LA')
          elm.style.fill = `rgb(${r}, ${g}, ${b})`;
      }
    }
    this.highlightonHover();
  }

  highlightonHover() {
    this.mapsvg = document.getElementsByClassName('mapsvg-state');
    this.infopanel = document.getElementById('info1');
    // console.log(this.mapsvg);
    let that = this;
    for (let i = 0; i < this.mapsvg.length; i++) {
      this.mapsvg[i].addEventListener('mouseover', mouseOverEffect);
      this.mapsvg[i].addEventListener('mouseout', mouseOutEffect);
      this.mapsvg[i].addEventListener('mousemove', mouseMoveEffect);
    }

    function mouseOverEffect() {
      let locationId = this.getAttribute('id');
      let currentLocation = that.breakdowns.filter(function (item) {
        if (item.location.isoCode === locationId) {
          return item;
        }
      });
     
      if (currentLocation.length != 0) {
        that.dataDisplay = true;        
        that.countryNameConfirmed = currentLocation[0].location.provinceOrState;
        that.totalConfirmedCases = currentLocation[0].totalConfirmedCases;
        that.totalRecoveredCases = currentLocation[0].totalRecoveredCases;
        that.totalDeaths = currentLocation[0].totalDeaths;
        // console.log(currentLocation[0])
        that.infopanel.innerHTML = `
        <div class="info__panel">
          <div>${currentLocation[0].location.provinceOrState}</div>
          <div>Confirmed: ${currentLocation[0].totalConfirmedCases}</div>
          <div>Recovered: ${currentLocation[0].totalRecoveredCases}</div>
          <div>Deaths: ${currentLocation[0].totalDeaths}</div>
        </div>
      `;

        this.classList.add('mapsvg-state__highlight');
      } else {
        that.dataDisplay = false;
      }
    }

    function mouseOutEffect() {
      that.dataDisplay = false;
      that.countryNameConfirmed = that.selectedItem.location.countryOrRegion;
      that.totalConfirmedCases = that.selectedItem.totalConfirmedCases;
      that.totalRecoveredCases = that.selectedItem.totalRecoveredCases;
      that.totalDeaths = that.selectedItem.totalDeaths;

      this.classList.remove('mapsvg-state__highlight');
    }
    function mouseMoveEffect(e) {
      // console.log(e);
      var mouseX = e.pageX, //X coordinates of mouse
        mouseY = e.pageY; //Y coordinates of mouse

      that.infopanel.style.top = e.offsetY - 50 + 'px';
      that.infopanel.style.left = mouseX - 500 + 'px';
      that.infopanel.style.right = mouseY - that.infopanel.width / 2 + 'px';
    }
  }
  displayLineChart() {
    // console.log(this.selectedCountry)
    let history = this.info.history;
    let labels = [];
    let Confirmed = [];
    let Recovered = [];
    let Deaths = [];
    history.forEach((his) => {
      labels.push(moment(his.date).format('MM/DD'));
      Confirmed.push(his.confirmed);
      Recovered.push(his.recovered);
      Deaths.push(his.deaths);
    });
    var data = {
      labels: labels.slice(labels.length - 15),
      datasets: [
        {
          label: 'Confirmed',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(220,220,220,0.2)',
          borderColor: 'orange', // The main line color
          borderCapStyle: 'square',
          borderDash: [], // try [5, 15] for instance
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'black',
          pointBackgroundColor: 'white',
          pointBorderWidth: 1,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: 'yellow',
          pointHoverBorderColor: 'brown',
          pointHoverBorderWidth: 2,
          pointRadius: 4,
          pointHitRadius: 10,
          // notice the gap in the data and the spanGaps: true
          data: Confirmed.slice(Confirmed.length - 15),
          spanGaps: true,
        },
        {
          label: 'Recovered',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(220,220,220,0.2)',
          borderColor: 'green', // The main line color
          borderCapStyle: 'square',
          borderDash: [], // try [5, 15] for instance
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'black',
          pointBackgroundColor: 'white',
          pointBorderWidth: 1,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: 'yellow',
          pointHoverBorderColor: 'brown',
          pointHoverBorderWidth: 2,
          pointRadius: 4,
          pointHitRadius: 10,
          // notice the gap in the data and the spanGaps: true
          data: Recovered.slice(Recovered.length - 15),
          spanGaps: true,
        },
        {
          label: 'Deaths',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(220,220,220,0.2)',
          borderColor: 'red', // The main line color
          borderCapStyle: 'square',
          borderDash: [], // try [5, 15] for instance
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'black',
          pointBackgroundColor: 'white',
          pointBorderWidth: 1,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: 'yellow',
          pointHoverBorderColor: 'brown',
          pointHoverBorderWidth: 2,
          pointRadius: 4,
          pointHitRadius: 10,
          // notice the gap in the data and the spanGaps: true
          data: Deaths.slice(Deaths.length - 15),
          spanGaps: true,
        },
      ],
    };

    var options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };
    if (this.selectedCountry == "US")
      this.lineChart = document.getElementById('lineChart2');
    else if (this.selectedCountry == "IN")
      this.lineChart = document.getElementById('lineChart3');
    else if (this.selectedCountry == "CA")
      this.lineChart = document.getElementById('lineChart4');

    var ctx = this.lineChart.getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: data,
      options: options,
    });
  }
}
