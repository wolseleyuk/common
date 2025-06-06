export class ObjectResponse {

    static get success(): TObjectResponse {
        return { ok: true, message: "Completed successfully" };
    }

    static failure(message: string): TObjectResponse {
        return { ok: false, message: message};
    }
}

export type TObjectResponse = {
    ok: boolean;
    message: string;
};