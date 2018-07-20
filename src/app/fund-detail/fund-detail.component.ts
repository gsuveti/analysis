import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fund-detail',
  templateUrl: './fund-detail.component.html',
  styleUrls: ['./fund-detail.component.scss']
})
export class FundDetailComponent implements OnInit {

  type = 'line';
  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        lineTension: 0,
        label: 'My First dataset',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false
  };

  constructor() {
  }

  ngOnInit() {
  }

}
