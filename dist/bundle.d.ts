declare class ObjectResponse {
    ok: boolean;
    message: string;
    static get success(): TObjectResponse;
    constructor(obj: TObjectResponse);
    toObject(): TObjectResponse;
}
type TObjectResponse = {
    ok: boolean;
    message: string;
};

export { ObjectResponse };
