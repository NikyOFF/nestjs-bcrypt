"use strict";
exports.__esModule = true;
exports.bcryptServiceProvider = exports.BCRYPT_SERVICE_TOKEN = void 0;
var bcrypt_service_1 = require("./bcrypt.service");
exports.BCRYPT_SERVICE_TOKEN = "BcryptService";
exports.bcryptServiceProvider = {
    provide: exports.BCRYPT_SERVICE_TOKEN,
    useClass: bcrypt_service_1.BcryptService
};
