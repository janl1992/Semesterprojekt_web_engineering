import { Component, OnInit } from '@angular/core';
import {MyStock} from "../classes/my-stock";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {MyFinanceService} from "../app.component.service";
import {MyStockExtended} from "../classes/my-stock-extended";
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'app-my-finance-display',
  templateUrl: './my-finance-display.component.html',
  styleUrls: ['./my-finance-display.component.css']
})
export class MyFinanceDisplayComponent implements OnInit {
  me_mystockextended: MyStock;
  numb_stock_value_final: Number;
  str_stock_value: string;
  constructor(
              private route: ActivatedRoute,
              private my_finance_service: MyFinanceService) {
              this.route.paramMap.subscribe(paramap =>this.str_stock_value = paramap.get('stock_symbol'));
              // console.log(this.str_stock_value);
              Observable.interval(4000).switchMap(() => this.my_finance_service.get_stock_price(this.str_stock_value)).map((data) => data.json()[0]["l_fix"]).subscribe((data) => {this.numb_stock_value_final = +data, console.log(this.numb_stock_value_final)});
              // console.log(this.str_stock_value_final);
  }

    ngOnInit(): void {
    this.me_mystockextended = new MyStockExtended("","","","","","","");
    // this.route.paramMap.subscribe(paramap => this.str_stock_value = paramap.get('stock_symbol'));
    // console.log(this.str_stock_value);
    // this.route.paramMap.subscribe(paramap => this.my_finance_service.get_stock_price(paramap.get('stock_symbol')).then(res1 => this.me_mystockextended = new MyStockExtended(paramap.get('stock_symbol'), paramap.get('stock_name'), paramap.get('stock_exch'), paramap.get('stock_type'), paramap.get('stock_echdisp'), paramap.get('stock_typedisp'), res1[0]["l_fix"])));
    this.route.paramMap.subscribe(paramap =>
      this.me_mystockextended = new MyStock(paramap.get('stock_symbol'), paramap.get('stock_name'), paramap.get('stock_exch'), paramap.get('stock_type'), paramap.get('stock_echdisp'), paramap.get('stock_typedisp'))
      );
    // console.log(this.str_stock_value);

  }

}
