import {NgModule} from "@angular/core";
import { AppComponent } from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { CheckoutComponent } from "./store/checkout.component";
import {RouterModule} from "@angular/router";

@NgModule({
    imports : [BrowserModule , StoreModule , RouterModule.forRoot([
        {path: "store", component: StoreComponent},
        {path: "cart", component: CartDetailComponent},
        {path: "checkout", component: CheckoutComponent},
        {path: "**",redirectTo: "/store"}
    ])],
    declarations : [AppComponent],
    bootstrap : [AppComponent]
})
export class AppModule{}