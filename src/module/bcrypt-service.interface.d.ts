export interface BcryptServiceInterface {
    hash(data: string): Promise<string>;
    compare(data: string, encrypted: string): Promise<boolean>;
}
