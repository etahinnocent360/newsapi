"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewsapiserviceService = void 0;
var core_1 = require("@angular/core");
var NewsapiserviceService = /** @class */ (function () {
    // private _http: any;
    function NewsapiserviceService(_http) {
        this._http = _http;
        this.newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=ca&apiKey=8bda72fe89d14b559582afb9ee2b4f19';
        this.techApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=8bda72fe89d14b559582afb9ee2b4f19';
        this.businessApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8bda72fe89d14b559582afb9ee2b4f19';
    }
    NewsapiserviceService.prototype.topnews = function () {
        return this._http.get(this.newsApiUrl);
    };
    NewsapiserviceService.prototype.technews = function () {
        return this._http.get(this.techApiUrl);
    };
    NewsapiserviceService.prototype.businessnews = function () {
        return this._http.get(this.businessApiUrl);
    };
    NewsapiserviceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], NewsapiserviceService);
    return NewsapiserviceService;
}());
exports.NewsapiserviceService = NewsapiserviceService;
