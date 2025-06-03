(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Common = {}));
})(this, (function (exports) { 'use strict';

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

    exports.ObjectResponse = ObjectResponse;
    exports.ProgressMessage = ProgressMessage;

}));
//# sourceMappingURL=bundle.js.map
