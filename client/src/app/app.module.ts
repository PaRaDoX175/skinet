import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { CoreModule } from './core/core.module';
import { ShopModule } from './shop/shop.module';
import { HomeModule } from './home/home.module';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './core/interceptors/loading.interceptors';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailedComponent } from './orders/order-detailed/order-detailed.component';
import { BasketComponent } from './basket/basket.component';
import { BasketModule } from './basket/basket.module';
import { CommonModule } from '@angular/common';
 
@NgModule({
  declarations: [
    AppComponent,
    // NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    HomeModule,
    NgxSpinnerModule,
    BsDropdownModule.forRoot(),
    CdkStepperModule,
    BasketModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
