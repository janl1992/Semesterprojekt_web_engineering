import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { MyFinanceSearchComponent } from './my-finance-search/my-finance-search.component';
import { MyFinanceDisplayComponent } from './my-finance-display/my-finance-display.component';
import {MyFinanceService} from "./app.component.service";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule],
  declarations: [
    AppComponent,
    MyFinanceSearchComponent,
    MyFinanceDisplayComponent
  ],
  providers: [ MyFinanceService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
