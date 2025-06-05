(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios')) :
    typeof define === 'function' && define.amd ? define(['exports', 'axios'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Common = {}, global.axios));
})(this, (function (exports, Axios) { 'use strict';

    class ObjectResponse {
        static get success() {
            return new ObjectResponse({ ok: true, message: "Completed successfully" }).toObject();
        }
        constructor(obj) {
            this.ok = obj.ok;
            this.message = obj.message;
        }
        toObject() {
            return {
                ok: this.ok,
                message: this.message
            };
        }
    }

    class ProgressMessage {
        static get createOrder() {
            return "Creating order...";
        }
        static addProduct(value) {
            return `Adding ${value}...`;
        }
        static assignCustomer(value) {
            return `Assigning customer ${value}...`;
        }
        static get saveOrder() {
            return "Saving order...";
        }
        static get updateQuantity() {
            return "Updating quantity...";
        }
        static get deleteLine() {
            return "Deleting line...";
        }
        static get deleteAllLines() {
            return "Deleting all lines...";
        }
    }

    class AxiosRestResponse {
        constructor(obj) {
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
            };
        }
        toObject() {
            return { ...this };
        }
    }

    class AxiosObject {
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

    exports.AxiosObject = AxiosObject;
    exports.AxiosRestResponse = AxiosRestResponse;
    exports.ObjectResponse = ObjectResponse;
    exports.ProgressMessage = ProgressMessage;

}));
//# sourceMappingURL=bundle.js.map
