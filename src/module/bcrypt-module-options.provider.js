"use strict";
exports.__esModule = true;
exports.bcryptModuleAsyncOptionsProvider = exports.bcryptModuleOptionsProvider = exports.BCRYPT_MODULE_OPTIONS_TOKEN = void 0;
exports.BCRYPT_MODULE_OPTIONS_TOKEN = "BCRYPT_MODULE_OPTIONS";
function bcryptModuleOptionsProvider(options) {
    return {
        provide: exports.BCRYPT_MODULE_OPTIONS_TOKEN,
        useValue: options
    };
}
exports.bcryptModuleOptionsProvider = bcryptModuleOptionsProvider;
function bcryptModuleAsyncOptionsProvider(options) {
    return {
        provide: exports.BCRYPT_MODULE_OPTIONS_TOKEN,
        useExisting: options.useExisting,
        useClass: options.useClass,
        useFactory: options.useFactory,
        inject: options.inject
    };
}
exports.bcryptModuleAsyncOptionsProvider = bcryptModuleAsyncOptionsProvider;
