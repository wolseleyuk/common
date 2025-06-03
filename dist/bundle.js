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

    exports.ObjectResponse = ObjectResponse;

}));
//# sourceMappingURL=bundle.js.map
