import { BcryptServiceInterface } from "./bcrypt-service.interface";
import { BcryptModuleOptionsInterface } from "./bcrypt-module-options.interface";
export declare class BcryptService implements BcryptServiceInterface {
    private readonly options;
    constructor(options: BcryptModuleOptionsInterface);
    hash(data: string): Promise<string>;
    compare(data: string, encrypted: string): Promise<boolean>;
}
