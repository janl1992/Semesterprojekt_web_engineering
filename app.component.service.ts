import {Injectable} from "@angular/core";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import "rxjs/add/operator/toPromise";
/**
 * Created by janloeffelsender on 15.07.17.
 */

@Injectable()
export class MyFinanceService {
  constructor(private http:Http){}
  get_abbreviation(str_stock_name:String): Promise<any> {
    let url = 'http://d.yimg.com/aq/autoc?query='+str_stock_name+'&region=US&lang=en-US&callback=YAHOO.util.ScriptNodeDataSource.callbacks';
    //let options = new RequestOptions({ headers: new Headers({ 'Type':'document','Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8', 'Accept-Encoding':'gzip, deflate', 'Accept-Language':'de-DE,de;q=0.8,en-US;q=0.6,en;q=0.4', 'Cache-Control':'max-age=0','Connection':'keep-alive','DNT':'1','Host':'d.yimg.com','Upgrade-Insecure-Requests':'1','User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36', 'Access-Control-Allow-Origin':'localhost:4200'}) });
    console.log(url);
    console.log(this.
    http.
    get(url).
    toPromise().
    then(this.extractdata)
    );
    return
  }

  extractdata(res:Response){
    let body = res.json();
    //console.log(body);
    return body;
  }
}
