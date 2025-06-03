export class ObjectResponse {
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
//# sourceMappingURL=object-response.js.map