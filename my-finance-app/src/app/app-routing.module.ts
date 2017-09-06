import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyFinanceDisplayComponent} from "./my-finance-display/my-finance-display.component";
import {MyFinanceSearchComponent} from "./my-finance-search/my-finance-search.component";
import {RouterModule} from "@angular/router";

const approutes = [
  {
    path: '',
    redirectTo: '/search_field',
    pathMatch: 'full'
  },
  {
    path:'search_field',
    component: MyFinanceSearchComponent
  },
  {
    path:'search_display/:stock_symbol/:stock_name/:stock_exch/:stock_type/:stock_echdisp/:stock_typedisp',
    component: MyFinanceDisplayComponent,
    data: {title: 'Stock abbreviation'}
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      approutes
      // { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
