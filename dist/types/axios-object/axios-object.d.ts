import { IRestObject } from "../interfaces/rest-object";
import { AxiosRequestConfig } from "axios";
export declare class AxiosObject implements IRestObject {
    private _config;
    constructor(config: AxiosRequestConfig);
    get config(): AxiosRequestConfig<any>;
    fetch(): Promise<any>;
    get(endpointId: string): this;
    body(data: Object): this;
    parameters(params: Object): this;
    toUrl(): Promise<string | undefined>;
}
