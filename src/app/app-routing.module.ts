import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FundListComponent} from './fund-list/fund-list.component';
import {FundDetailComponent} from './fund-detail/fund-detail.component';
import {AafFundListComponent} from './aaf-fund-list/aaf-fund-list.component';

const routes: Routes = [{
  path: '',
  component: FundListComponent,
}, {
  path: 'aaf',
  component: AafFundListComponent,
}, {
  path: ':id',
  component: FundDetailComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
