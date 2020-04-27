import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  apiUrl1 = 'https://coronavirus-19-api.herokuapp.com/';
  apiUrl2 = 'https://dg-covid-19.herokuapp.com/apis/';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.apiUrl2}getCovidDataByState/global`);
  }

  getCountries(state) {
    return this.http.get(`${this.apiUrl1}getCovidDataByState/${state}`);
  }

  getTrackNearMeData(lat, lng) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get(
      this.apiUrl2 + `/getNearPersonInfo/${lat}/${lng}/30000`,
      httpOptions
    );
  }

  getCovidByState(state) {
    return this.http.get(`${this.apiUrl2}getCovidDataByState/${state}`);

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //   }),
    // };
    // return this.http.get(
    //   this.apiUrl2 + `/getCovidDataByState/${state}`,
    //   httpOptions
    // );
  }
}
