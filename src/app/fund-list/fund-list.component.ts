import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FUNDS} from '../funds.data';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.scss']
})
export class FundListComponent implements OnInit, AfterViewInit {
  displayedColumns = ['name', 'data', 'VUAN', '1D', '1M', '3M', '12M', '36M', '60M', '120M', 'YTD', 'SINCEINCEPTION', 'SRRI'];
  columns = [];
  dataSource = new MatTableDataSource(FUNDS);

  assetMangerOptions = [];
  assetOptions = [
    {value: '0', viewValue: ''},
    {value: '1', viewValue: 'Amundi Luxembourg S.A.'},
    {value: '2', viewValue: 'BRD Asset Management'},
    {value: '3', viewValue: 'CERTINVEST'},
    {value: '4', viewValue: 'ERSTE Asset Management'}
  ];

  productOptions = [
    {value: '0', viewValue: 'Produs 1'},
    {value: '0', viewValue: 'Produs 2'},
    {value: '0', viewValue: 'Produs 3'}
  ];
  typeOptions = [
    {value: '0', viewValue: 'Actiuni'},
    {value: '1', viewValue: 'Capital Garantat / Protejat'},
    {value: '2', viewValue: 'Monetare'},
    {value: '2', viewValue: 'Multi active / Agresive'},
    {value: '2', viewValue: 'Multi active / Defensive'},
    {value: '2', viewValue: 'Multi active / Echitablile'},
    {value: '2', viewValue: 'Multi active / Flexibile'}
  ];

  @ViewChild(MatSort) sort: MatSort;


  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  select() {
    this.router.navigate(['/detail']);
  }
}
