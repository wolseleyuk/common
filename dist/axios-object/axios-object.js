import { AxiosRestResponse } from "./axios-rest-response";
const Axios = require('axios');
export class AxiosObject {
    constructor(config) {
        this._config = {};
        Object.assign(this._config, config);
    }
    get config() {
        return this._config;
    }
    async fetch() {
        try {
            const resp = await Axios.request(this._config);
            return new AxiosRestResponse(resp).toObject();
        }
        catch (error) {
            console.log(error);
            return ('Error');
        }
    }
    body(data) {
        this._config.data = data;
        return this;
    }
    parameters(params) {
        this._config.params = params;
        return this;
    }
    async toUrl() {
        return `${this._config.baseURL ? this._config.baseURL + ' ' : ''}${this._config.url || ''}`;
    }
}
//# sourceMappingURL=axios-object.js.map