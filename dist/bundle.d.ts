import { AxiosRequestConfig, AxiosResponse } from 'axios';

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

interface IRestObject {
    body: (data: Object) => IRestObject;
    fetch: () => Promise<any>;
    parameters: (params: Object) => IRestObject;
    toUrl: () => Promise<string | undefined>;
}

interface IRestResponse {
    body: Object;
    response: IResp;
}
interface IResp {
    body: ReadableStream;
    bodyused: boolean;
    ok: boolean;
    redirected: boolean;
    status: number;
    statusText: string;
    type: string;
    url: string;
}

declare class AxiosObject implements IRestObject {
    private _config;
    constructor(config: AxiosRequestConfig);
    get config(): AxiosRequestConfig<any>;
    fetch(): Promise<any>;
    body(data: Object): this;
    parameters(params: Object): this;
    toUrl(): Promise<string | undefined>;
}

declare class AxiosRestResponse implements IRestResponse {
    body: Object;
    response: any;
    constructor(obj: AxiosResponse);
    toObject(): this;
}

export { AxiosObject, AxiosRestResponse, ObjectResponse, ProgressMessage };
export type { IRestObject, IRestResponse };
