declare class ObjectResponse {
    ok: boolean;
    message: string;
    static get success(): TObjectResponse;
    constructor(obj: TObjectResponse);
    toObject(): TObjectResponse;
}
type TObjectResponse = {
    ok: boolean;
    message: string;
};

declare class ProgressMessage {
    static get createOrder(): string;
    static addProduct(value: string): string;
    static assignCustomer(value: string): string;
    static get saveOrder(): string;
    static get updateQuantity(): string;
    static get deleteLine(): string;
    static get deleteAllLines(): string;
}

export { ObjectResponse, ProgressMessage };
