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
const core_1 = require("@angular/core");
const product_repository_1 = require("../model/product.repository");
const cart_model_1 = require("../model/cart.model");
const router_1 = require("@angular/router");
let StoreComponent = class StoreComponent {
    constructor(repository, cart, router) {
        this.repository = repository;
        this.cart = cart;
        this.router = router;
        this.selectedCategory = null;
        this.productsPerPage = 4;
        this.selectedPage = 1;
    }
    get products() {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.repository.getProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productsPerPage);
    }
    get categories() {
        return this.repository.getCategories();
    }
    changeCategory(newCategory) {
        this.selectedCategory = newCategory;
    }
    changePage(newPage) {
        this.selectedPage = newPage;
    }
    changePageSize(newSize) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }
    /*get pageCount(): number {
        return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage)
    }*/
    get pageNumbers() {
        return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage))
            .fill(0).map((x, i) => i + 1);
    }
    addProductToCart(product) {
        this.cart.addLine(product);
        this.router.navigateByUrl("/cart");
    }
};
StoreComponent = __decorate([
    core_1.Component({
        selector: "store",
        moduleId: module.id,
        templateUrl: "store.component.html"
    }), 
    __metadata('design:paramtypes', [product_repository_1.ProductRepository, cart_model_1.Cart, router_1.Router])
], StoreComponent);
exports.StoreComponent = StoreComponent;
