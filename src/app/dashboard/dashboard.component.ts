import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;
  constructor() {}

  ngOnInit() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
          {
              label: 'Data upload',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [65, 59, 80, 81, 56]
          },
          {
              label: 'Data download',
              backgroundColor: '#9CCC65',
              borderColor: '#7CB342',
              data: [28, 48, 40, 19, 86]
          }
      ]
    }
  }

}
