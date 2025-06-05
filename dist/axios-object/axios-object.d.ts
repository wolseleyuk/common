import { IRestObject } from "../interfaces/rest-object.js";
import { AxiosRequestConfig } from "axios";
export declare class AxiosObject implements IRestObject {
    private _config;
    constructor(config: AxiosRequestConfig);
    get config(): AxiosRequestConfig<any>;
    fetch(): Promise<any>;
    body(data: Object): this;
    parameters(params: Object): this;
    toUrl(): Promise<string | undefined>;
}
