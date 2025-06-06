import { TObjectResponse } from '../object-response';
export declare class BaseModel {
    protected _required: string[];
    toObject<T extends object>(omitNullUndefined?: boolean): Partial<T>;
    isValid(): TObjectResponse;
}
