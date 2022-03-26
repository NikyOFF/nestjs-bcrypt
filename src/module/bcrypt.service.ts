import { Inject, Injectable } from "@nestjs/common";
import { genSaltSync, hash, compare } from "bcrypt";
import { BcryptServiceInterface } from "./bcrypt-service.interface";
import { BCRYPT_MODULE_OPTIONS_TOKEN } from "./bcrypt-module-options.provider";
import { BcryptModuleOptionsInterface } from "./bcrypt-module-options.interface";


@Injectable()
export class BcryptService implements BcryptServiceInterface {
  public constructor(
    @Inject(BCRYPT_MODULE_OPTIONS_TOKEN)
    private readonly options: BcryptModuleOptionsInterface
  ) {}

  public async hash(data: string): Promise<string> {
    return hash(`${data}${this.options.secret || ""}`, this.options.saltOrRounds || genSaltSync());
  }

  public async compare(data: string, encrypted: string): Promise<boolean> {
    return compare(`${data}${this.options.secret || ""}`, encrypted);
  }
}
