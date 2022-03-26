"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var BcryptModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptModule = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_service_provider_1 = require("./bcrypt-service.provider");
const bcrypt_module_options_provider_1 = require("./bcrypt-module-options.provider");
let BcryptModule = BcryptModule_1 = class BcryptModule {
    static forRoot(options) {
        return {
            module: BcryptModule_1,
            providers: [
                (0, bcrypt_module_options_provider_1.bcryptModuleOptionsProvider)(options),
                bcrypt_service_provider_1.bcryptServiceProvider
            ],
            exports: [
                bcrypt_service_provider_1.bcryptServiceProvider
            ]
        };
    }
    static forRootAsync(options) {
        return {
            module: BcryptModule_1,
            imports: options.imports,
            providers: [
                (0, bcrypt_module_options_provider_1.bcryptModuleAsyncOptionsProvider)(options),
                bcrypt_service_provider_1.bcryptServiceProvider
            ],
            exports: [
                bcrypt_service_provider_1.bcryptServiceProvider
            ]
        };
    }
};
BcryptModule = BcryptModule_1 = __decorate([
    (0, common_1.Module)({})
], BcryptModule);
exports.BcryptModule = BcryptModule;
//# sourceMappingURL=bcrypt.module.js.map