import { Provider } from "@nestjs/common";
import { BcryptServiceInterface } from "./bcrypt-service.interface";
export declare const BCRYPT_SERVICE_TOKEN = "BcryptService";
export declare const bcryptServiceProvider: Provider<BcryptServiceInterface>;
