export declare class ObjectResponse {
    static get success(): TObjectResponse;
    static failure(message: string): TObjectResponse;
}
export type TObjectResponse = {
    ok: boolean;
    message: string;
};
