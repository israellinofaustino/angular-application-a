"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core"); //Primeiro parametro, tipo da classe = Component... vai importar do node_modules(biblioteca @angular)
var MeuPrimeiro2Component = /** @class */ (function () {
    function MeuPrimeiro2Component() {
    }
    MeuPrimeiro2Component.prototype.ngOnInit = function () {
    };
    MeuPrimeiro2Component = __decorate([
        core_1.Component({
            selector: 'app-meu-primeiro2',
            templateUrl: './meu-primeiro2.component.html',
            styleUrls: ['./meu-primeiro2.component.css'] //
        })
    ], MeuPrimeiro2Component);
    return MeuPrimeiro2Component;
}());
exports.MeuPrimeiro2Component = MeuPrimeiro2Component;
