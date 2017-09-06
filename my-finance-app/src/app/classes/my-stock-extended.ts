import {MyStock} from "./my-stock";

export class MyStockExtended extends MyStock{
  constructor(public str_symbol: string,public str_name: string,public str_exch: string,public str_type: string,public str_echdisp: string,public str_typedisp: string,public str_stock_value: string){
    super(new String(str_symbol),new String(str_name),new String(str_exch),new String(str_type),new String(str_echdisp),new String(str_typedisp))
  };
}
