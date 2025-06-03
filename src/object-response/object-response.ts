export class ObjectResponse {

    ok: boolean;
    message: string;

    static get success(): TObjectResponse {
        return new ObjectResponse({ ok: true, message: "Completed successfully" }).toObject();
    }

    constructor(obj: TObjectResponse) {
        this.ok = obj.ok;
        this.message = obj.message;
    }

    public toObject(): TObjectResponse {
        return {
            ok: this.ok,
            message: this.message
        };
    }
}

type TObjectResponse = {
    ok: boolean;
    message: string;
};