import { IRestResponse } from "../interfaces/rest-response";
import { AxiosResponse } from "axios";
export declare class AxiosRestResponse implements IRestResponse {
    body: Object;
    response: any;
    constructor(obj: AxiosResponse);
    toObject(): this;
}
