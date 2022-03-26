import { DynamicModule } from "@nestjs/common";
import { BcryptModuleAsyncOptionsInterface, BcryptModuleOptionsInterface } from "./bcrypt-module-options.interface";
export declare class BcryptModule {
    static forRoot(options: BcryptModuleOptionsInterface): DynamicModule;
    static forRootAsync(options: BcryptModuleAsyncOptionsInterface): DynamicModule;
}
