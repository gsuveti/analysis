import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {FundListComponent} from './fund-list/fund-list.component';
import {FundDetailComponent} from './fund-detail/fund-detail.component';
import {ChartModule} from 'angular2-chartjs';
import { AafFundListComponent } from './aaf-fund-list/aaf-fund-list.component';


@NgModule({
  declarations: [
    AppComponent,
    FundListComponent,
    FundDetailComponent,
    AafFundListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatSelectModule,
    MatGridListModule,
    MatDividerModule, MatListModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
