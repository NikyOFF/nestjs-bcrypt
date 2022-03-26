"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bcryptServiceProvider = exports.BCRYPT_SERVICE_TOKEN = void 0;
const bcrypt_service_1 = require("./bcrypt.service");
exports.BCRYPT_SERVICE_TOKEN = "BcryptService";
exports.bcryptServiceProvider = {
    provide: exports.BCRYPT_SERVICE_TOKEN,
    useClass: bcrypt_service_1.BcryptService
};
//# sourceMappingURL=bcrypt-service.provider.js.map