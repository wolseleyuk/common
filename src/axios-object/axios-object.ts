import { IRestObject } from "../interfaces/rest-object";
import { AxiosRestResponse } from "./axios-rest-response";
import Axios from "axios";
import { AxiosRequestConfig } from "axios";

export class AxiosObject implements IRestObject {

    private _config: AxiosRequestConfig;

    constructor(config: AxiosRequestConfig) {
        this._config = {};
        Object.assign(this._config, config);
    }

    public get config() {
        return this._config;
    }

    public async fetch(): Promise<any> {
        try {
            const resp = await Axios.request(this._config);
            return new AxiosRestResponse(resp).toObject();
        } catch (error: any) {
            console.log(error);
            return ('Error');
        }
    }

    public body(data: Object): this {
        this._config.data = data;
        return this;
    }

    public parameters(params: Object): this {
        this._config.params = params;
        return this;
    }

    public async toUrl(): Promise<string | undefined> {
        return `${this._config.baseURL ? this._config.baseURL + ' ' : ''}${this._config.url || ''}`;
    }

}