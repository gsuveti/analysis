import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FUNDS_AAF} from '../funds-aaf.data';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import * as _ from "lodash";

@Component({
  selector: 'app-aaf-fund-list',
  templateUrl: './aaf-fund-list.component.html',
  styleUrls: ['./aaf-fund-list.component.scss']
})
export class AafFundListComponent implements OnInit, AfterViewInit {
  columns = [];
  dataSource = new MatTableDataSource(FUNDS_AAF);

  assetMangerOptions = [];
  typeOptions = [];

  @ViewChild(MatSort) sort: MatSort;


  constructor(private router: Router) {
  }

  ngOnInit() {
    let assetManagerOptionValues = [];
    let typeOptionValues = [];
    FUNDS_AAF.map(item => {
      this.columns = _.union(this.columns, Object.keys(item));

      assetManagerOptionValues = _.union(assetManagerOptionValues, [item['Administrator fond']]);
      typeOptionValues = _.union(typeOptionValues, [item['Tip fond']]);
    });

    this.assetMangerOptions = assetManagerOptionValues.map(option => {
      return {
        value: option,
        viewValue: option
      };
    });
    this.typeOptions = typeOptionValues.map(option => {
      return {
        value: option,
        viewValue: option
      };
    });

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
