"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TopnewsComponent = void 0;
var core_1 = require("@angular/core");
var TopnewsComponent = /** @class */ (function () {
    function TopnewsComponent(_services) {
        this._services = _services;
    }
    TopnewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._services.topnews().subscribe(function (result) {
            console.log(result);
            _this.topnewsDisplay = result.articles;
        });
    };
    TopnewsComponent = __decorate([
        core_1.Component({
            selector: 'app-topnews',
            templateUrl: './topnews.component.html',
            styleUrls: ['./topnews.component.scss']
        })
    ], TopnewsComponent);
    return TopnewsComponent;
}());
exports.TopnewsComponent = TopnewsComponent;
