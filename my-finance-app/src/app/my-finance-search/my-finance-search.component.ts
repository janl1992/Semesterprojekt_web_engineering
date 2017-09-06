import { Component, OnInit } from '@angular/core';
import { MyFinanceService } from '../app.component.service';
import { MyStock } from '../classes/my-stock';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/of";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";


@Component({
  selector: 'app-my-finance-search',
  templateUrl: './my-finance-search.component.html',
  styleUrls: ['./my-finance-search.component.css']
})
export class MyFinanceSearchComponent implements OnInit {
  private searchTerms = new Subject<string>();
  str_stock: String;
  mystock_stocks: Observable<MyStock[]>;
  mystocks :MyStock[];
  obj: Object;

  constructor(private my_finance_service: MyFinanceService,
              private router: Router,
              private route: ActivatedRoute) { }

  find_abbreviation(str_stock_name_surface: string): void {
    this.searchTerms.next(str_stock_name_surface);
  }

  gotoDetail(mystock: MyStock): void {
    //let link = ["/search_display", mystock.symbol];
    // console.log("gotoDetail was clicked");
    // this.router.navigate(["/search_display", mystock.symbol]);
    this.router.navigate(["./search_display", mystock.symbol, mystock.name, mystock.exch, mystock.type, mystock.exchDisp, mystock.typeDisp]);
    // this.router.navigate((["../search_display", mystock.symbol]));
  }

  ngOnInit() {
    this.mystock_stocks = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
    // switchMap on the other hand will automatically unsubscribe from any previous observable when a new event comes down the stream.
    // Any events to be merged into the trunk stream are ignored if a new event comes in.
      .switchMap(term => term
      ? this.my_finance_service.get_abbreviation(term)
      :Observable.of<MyStock[]>([]))
}
}
