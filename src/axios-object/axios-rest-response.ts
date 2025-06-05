import { IRestResponse } from "../interfaces/rest-response.js";
import { AxiosResponse } from "axios";

export class AxiosRestResponse implements IRestResponse {

    body: Object;
    response: any;

    constructor(obj: AxiosResponse) {
        this.body = obj.data;
        this.response = {
            body: new ReadableStream(obj.data),
            bodyused: true,
            ok: obj.statusText === 'OK',
            redirected: false,
            status: obj.status,
            statusText: obj.statusText,
            type: '',
            url: obj.config.url
        }
    }

    public toObject() {
        return { ...this };
    }

}