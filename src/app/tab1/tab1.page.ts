import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';
import { Chart } from 'chart.js';
import * as moment from 'moment/moment';

import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public info: any = null;
  public breakdowns: any = null;
  public mapsvg: any = null;
  public infopanel: any = null;
  public lineChart: any = null;
  public barChartAge: any = null;
  public data: null;
  public columns: any;
  public rows: any;

  public countryNameConfirmed: any = "Global";
  public totalConfirmedCases: any;
  public countryNameDeceased: any;
  public totalDeaths: any;
  public countryNameRecovered: any;
  public totalRecoveredCases: any;

  ClosedCases: number;
  recoveredRate: any;
  deathRate: any;
  dataShow: boolean = false;


  p: number = 1;
  reverse: boolean;
  order: string="country";

  constructor(private covidService: CovidService,
    private spinner: NgxSpinnerService) {
    this.columns = [
      {
        prop: 'country',
        name: 'Country',
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
  }

  async ngOnInit() {
    // const loading = await this.loadingController.create({
    //   message: 'Please wait...',
    //   duration: 2000
    // });
    // loading.present();
    this.getCovidData();

    this.lineChart = document.getElementById('lineChart');
    this.barChartAge = document.getElementById('barChartAge');

    // this.countryNameConfirmed = document.getElementById('countryNameConfirmed');
    // this.totalConfirmedCases = document.getElementById('totalConfirmedCases');
    // this.countryNameDeceased = document.getElementById('countryNameDeceased');
    // this.totalDeaths = document.getElementById('totalDeaths');
    // this.countryNameRecovered = document.getElementById('countryNameRecovered');
    // this.totalRecoveredCases = document.getElementById('totalRecoveredCases');

    // this.recoveredRate = document.getElementById('recoveredRate');
    // this.deathRate = document.getElementById('deathRate');
  }
  pagination(event) {
    this.p = event;
  }

  getCovidData() {
    this.spinner.show();
    let that = this;
    this.covidService.getAll().subscribe((data: any) => {
      this.spinner.hide();
      if (data.result) {
        // console.log(data.result);
        this.info = data.result.stats;
        this.totalConfirmedCases = this.info.totalConfirmedCases;
        this.totalDeaths = this.info.totalDeaths;
        this.totalRecoveredCases = this.info.totalRecoveredCases;

        this.ClosedCases = this.info.totalRecoveredCases + this.info.totalDeaths;
        this.recoveredRate = this.info.totalRecoveredCases / (this.info.totalRecoveredCases + this.info.totalDeaths);
        this.deathRate = this.info.totalDeaths / (this.info.totalRecoveredCases + this.info.totalDeaths);

        this.breakdowns = data.result.stats.breakdowns.map((row) => {
          return {
            ...row,
            country: row['location']['countryOrRegion'],
          };
        });
        // console.log(this.breakdowns)

        that.addDataToMap();
        that.displayLineChart();

      }
    });
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  addDataToMap() {
    let breakdowns = this.info.breakdowns;
    // console.log(breakdowns);
    var temp_array = breakdowns.map(function (item) {
      return item.totalConfirmedCases;
    });

    var highest_value = Math.max.apply(Math, temp_array);
    for (let i = 0; i < breakdowns.length; i++) {
      if (
        breakdowns[i].location.isoCode === null ||
        breakdowns[i].location.isoCode === undefined
      ) {
        continue;
      } else {
        let elm = document.getElementById(breakdowns[i].location.isoCode);
        let fact = temp_array[i] / 150;

        let r = 255;
        let g = 189 - fact;
        let b = 189 - fact;
        elm.style.fill = `rgb(${r}, ${g}, ${b})`;

        // elm.innerHTML = `
        // <div class="info">
        //   <div>${breakdowns[i].location.countryOrRegion}</div>
        //   <div>Confirmed: ${breakdowns[i].totalConfirmedCases}</div>
        //   <div>Deaths: ${breakdowns[i].totalDeaths}</div>
        //   <div>Recovered: ${breakdowns[i].totalRecoveredCases}</div>
        // </div>
        // `;
      }
      // if (breakdowns[i].location.isoCode === null) {
      //   continue;
      // } else {
      //   console.log(document.querySelector('RU'));
      //   // document.querySelector(breakdowns[i].location.isoCode).style.fill =
      //   //   'rgba(11, 104, 170,1';
      // }
      // if (breakdowns[i].location.isoCode !== null) {
      //   document
      //     .querySelector(breakdowns[i].location.isoCode)
      //     .style({ fill: 'rgba(11, 104, 170,1' });
      //   console.log(breakdowns[i]);
      // }

      this.highlightonHover();
    }
  }

  addOnFromState(el) {
    console.log(el);
  }

  highlightonHover() {
    let that = this;
    this.mapsvg = document.getElementsByClassName('mapsvg-region');
    this.infopanel = document.getElementById('info');
    for (let i = 0; i < this.mapsvg.length; i++) {
      this.mapsvg[i].addEventListener('mouseover', mouseOverEffect);
      this.mapsvg[i].addEventListener('mouseout', mouseOutEffect);
      this.mapsvg[i].addEventListener('mousemove', mouseMoveEffect);
    }

    function mouseOverEffect() {
      that.dataShow = true;

      let locationId = this.getAttribute('id');
      let currentLocation = that.breakdowns.filter(function (item) {
        if (item.location.isoCode === locationId) {
          return item;
        }
      });

      // console.log('currentLocation', currentLocation);
      if (currentLocation.length != 0) {
        that.infopanel.innerHTML = `
        <div class="info__panel">
          <div>${currentLocation[0].country}</div>
          <div>Confirmed: ${currentLocation[0].totalConfirmedCases}</div>
          <div>Recovered: ${currentLocation[0].totalRecoveredCases}</div>
          <div>Deaths: ${currentLocation[0].totalDeaths}</div>

        </div>
      `;
        that.countryNameConfirmed = currentLocation[0].country;
        that.totalConfirmedCases =
          currentLocation[0].totalConfirmedCases;
        that.countryNameDeceased = currentLocation[0].country;
        that.totalDeaths = currentLocation[0].totalDeaths;
        that.countryNameRecovered = currentLocation[0].country;
        that.totalRecoveredCases =
          currentLocation[0].totalRecoveredCases;

        that.ClosedCases = currentLocation[0].totalRecoveredCases + currentLocation[0].totalDeaths;
        that.recoveredRate = currentLocation[0].totalRecoveredCases / (currentLocation[0].totalRecoveredCases + currentLocation[0].totalDeaths)
        that.deathRate = currentLocation[0].totalDeaths / (currentLocation[0].totalRecoveredCases + currentLocation[0].totalDeaths)

        this.classList.add('mapsvg__highlight');
      }

    }

    function mouseOutEffect() {
      // that.infopanel.innerHTML = '';
      that.dataShow = false;
      that.countryNameConfirmed = 'Global';
      that.totalConfirmedCases = that.info.totalConfirmedCases;
      that.countryNameDeceased = 'Global';
      that.totalDeaths = that.info.totalDeaths;
      that.countryNameRecovered = 'Global';
      that.totalRecoveredCases = that.info.totalRecoveredCases;

      that.ClosedCases = that.info.totalRecoveredCases + that.info.totalDeaths;
      that.recoveredRate = that.info.totalRecoveredCases / (that.info.totalRecoveredCases + that.info.totalDeaths);
      that.deathRate = that.info.totalDeaths / (that.info.totalRecoveredCases + that.info.totalDeaths);

      this.classList.remove('mapsvg__highlight');
    }
    function mouseMoveEffect(e) {
      // console.log(e);
      that.dataShow = true;

      var mouseX = e.pageX, //X coordinates of mouse
        mouseY = e.pageY; //Y coordinates of mouse

      that.infopanel.style.top = e.offsetY - 50 + 'px';
      that.infopanel.style.left = mouseX - 500 + 'px';
      that.infopanel.style.right = mouseY - that.infopanel.width / 2 + 'px';
    }
  }

  displayLineChart() {
    // console.log(this.info.history)
    // let history=this.info.history;
    let labels = [];
    let Confirmed = [];
    let Recovered = [];
    let Deaths = [];
    this.info.history.forEach(his => {
      labels.push(moment(his.date).format("MM/DD"));
      Confirmed.push(his.confirmed);
      Recovered.push(his.recovered);
      Deaths.push(his.deaths)
    })
    var data = {
      labels: labels.slice(Confirmed.length - 15),
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
          data: Recovered.slice(Confirmed.length - 15),
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
          data: Deaths.slice(Confirmed.length - 15),
          spanGaps: true,
        },
      ],
    };
    var ctx = this.lineChart.getContext('2d');
    // console.log(ctx);
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
    // var lineChart = new Chart(ctx).Line(data, options);
    var lineChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options,
    });
  }

  displayAgeChart() {
    var densityData = {
      label: 'Density of Planets (kg/m3)',
      data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638],
      backgroundColor: [
        'rgba(0, 99, 132, 0.6)',
        'rgba(30, 99, 132, 0.6)',
        'rgba(60, 99, 132, 0.6)',
        'rgba(90, 99, 132, 0.6)',
        'rgba(120, 99, 132, 0.6)',
        'rgba(150, 99, 132, 0.6)',
        'rgba(180, 99, 132, 0.6)',
        'rgba(210, 99, 132, 0.6)',
        'rgba(240, 99, 132, 0.6)',
      ],
      borderColor: [
        'rgba(0, 99, 132, 1)',
        'rgba(30, 99, 132, 1)',
        'rgba(60, 99, 132, 1)',
        'rgba(90, 99, 132, 1)',
        'rgba(120, 99, 132, 1)',
        'rgba(150, 99, 132, 1)',
        'rgba(180, 99, 132, 1)',
        'rgba(210, 99, 132, 1)',
        'rgba(240, 99, 132, 1)',
      ],
      borderWidth: 2,
      hoverBorderWidth: 0,
    };
    var chartOptions = {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            barPercentage: 0.5,
          },
        ],
      },
      elements: {
        rectangle: {
          borderSkipped: 'left',
        },
      },
    };
    var barChart = new Chart(this.barChartAge, {
      type: 'horizontalBar',
      data: {
        labels: [
          '0-10',
          '10-20',
          '20-30',
          '30-40',
          '40-50',
          '50-60',
          '60-70',
          '70-80',
        ],
        datasets: [densityData],
      },
      options: chartOptions,
    });
  }
}
