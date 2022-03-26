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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const bcrypt_module_options_provider_1 = require("./bcrypt-module-options.provider");
let BcryptService = class BcryptService {
    constructor(options) {
        this.options = options;
    }
    async hash(data) {
        return (0, bcrypt_1.hash)(`${data}${this.options.secret || ""}`, this.options.saltOrRounds || (0, bcrypt_1.genSaltSync)());
    }
    async compare(data, encrypted) {
        return (0, bcrypt_1.compare)(`${data}${this.options.secret || ""}`, encrypted);
    }
};
BcryptService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(bcrypt_module_options_provider_1.BCRYPT_MODULE_OPTIONS_TOKEN)),
    __metadata("design:paramtypes", [Object])
], BcryptService);
exports.BcryptService = BcryptService;
//# sourceMappingURL=bcrypt.service.js.map