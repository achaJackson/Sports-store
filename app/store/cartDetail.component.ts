import { Component } from "@angular/core";
import {Cart} from "../model/cart.model";

@Component({
    moduleId: module.id,
    templateUrl: "cartDetail.component.html"

//template:`<i>Testing</i>`
})
export class CartDetailComponent{
     constructor(public cart: Cart) {}
}