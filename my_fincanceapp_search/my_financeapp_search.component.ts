import { Component, OnInit } from '@angular/core';
import { Stock } from '../classes/stock';
import { MyFinanceService } from '../app.component.service';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './my_financeapp_search.component.html',
  styleUrls: ['./my_financeapp_search.component.css']
})
export class MycomponentComponent implements OnInit {
  mystock :Stock = new Stock("","");
  constructor(private my_finance_service: MyFinanceService) { }
  //twitterhashtag: Twitterhashtag = new Twitterhashtag("");
  find_abbreviation(str_stock_name:String){
    //console.log(str_stock_name);
    this.my_finance_service.get_abbreviation(str_stock_name)

  }
  ngOnInit() {
  }

}
