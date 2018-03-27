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
let CounterDirective = class CounterDirective {
    constructor(container, template) {
        this.container = container;
        this.template = template;
    }
    ngOnChanges(changes) {
        this.container.clear();
        for (let i = 0; i < this.counter; i++) {
            this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i + 1));
        }
    }
};
__decorate([
    core_1.Input("CounterOf"), 
    __metadata('design:type', Number)
], CounterDirective.prototype, "counter", void 0);
CounterDirective = __decorate([
    core_1.Directive({
        selector: "[counterOf]"
    }), 
    __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.TemplateRef])
], CounterDirective);
exports.CounterDirective = CounterDirective;
class CounterDirectiveContext {
    constructor($implicit) {
        this.$implicit = $implicit;
    }
}
