import { Provider } from "@nestjs/common";
import { BcryptModuleAsyncOptionsInterface, BcryptModuleOptionsInterface } from "./bcrypt-module-options.interface";
export declare const BCRYPT_MODULE_OPTIONS_TOKEN = "BCRYPT_MODULE_OPTIONS";
export declare function bcryptModuleOptionsProvider(options: BcryptModuleOptionsInterface): Provider<any>;
export declare function bcryptModuleAsyncOptionsProvider(options: BcryptModuleAsyncOptionsInterface): Provider<any>;
