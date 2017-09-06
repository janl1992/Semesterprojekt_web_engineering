///<reference path="../../node_modules/@angular/http/src/http.d.ts"/>
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Injectable} from "@angular/core";
import "rxjs/add/operator/toPromise";
import {MyStock} from "./classes/my-stock";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {map} from "rxjs/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/filter";
/**
 * Created by janloeffelsender on 21.07.17.
 */

@Injectable()
export class MyFinanceService {
  // mystock_stocks: Observable<MyStock[]>;
  constructor(private http: Http ) {}

  get_abbreviation(str_stock_name: String): Observable<MyStock[]> {
    // console.log("Stock: " + str_stock_name);
    let url = 'http://localhost:3000/get_stock/' + str_stock_name;
    console.log(url);
    return this
      .http
      .get(url).map(res => res.json()["ResultSet"]["Result"].map(t => t as MyStock[]))
  }

  get_stock_price(str_abbreviation: String): Observable<Response>{
    // this.http = new Http;
    // let url = 'http://localhost:3000/get_stock_price/' + str_abbreviation;
    // http://localhost:3000/get_stock_price/DTE
    // const pat = new RegExp("[\.][A-Z]+");
    // let str_abbreviation_replaced = "";
    // console.log(str_abbreviation);
    // str_abbreviation_replaced = str_abbreviation.replace(pat, "");

    let url_googf = 'http://localhost:3000/get_stock_price/'+ str_abbreviation;
    // console.log(this.http.get(url_googf).map(res => res.json()["l_fix"]));
    this.http.get(url_googf);
    return this
      .http
      .get(url_googf)
  }

  extractdata(res:Response){
    let body = res.json();
    //console.log(body);
    return body;
  }

}
