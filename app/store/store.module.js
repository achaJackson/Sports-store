"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const platform_browser_1 = require("@angular/platform-browser");
const core_1 = require("@angular/core");
const model_module_1 = require("../model/model.module");
const store_component_1 = require("./store.component");
const forms_1 = require("@angular/forms");
const counter_directive_1 = require('./counter.directive');
const cartSummary_component_1 = require('./cartSummary.component');
const cartDetail_component_1 = require('./cartDetail.component');
const checkout_component_1 = require("./checkout.component");
const router_1 = require("@angular/router");
let StoreModule = class StoreModule {
};
StoreModule = __decorate([
    core_1.NgModule({
        imports: [model_module_1.ModelModule, platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule],
        declarations: [store_component_1.StoreComponent, counter_directive_1.CounterDirective, cartSummary_component_1.CartSummaryComponent,
            cartDetail_component_1.CartDetailComponent, checkout_component_1.CheckoutComponent],
        exports: [store_component_1.StoreComponent, cartDetail_component_1.CartDetailComponent, checkout_component_1.CheckoutComponent]
    }), 
    __metadata('design:paramtypes', [])
], StoreModule);
exports.StoreModule = StoreModule;
