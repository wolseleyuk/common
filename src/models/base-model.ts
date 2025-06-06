import { ApplicationError } from '../errors';
import { ObjectResponse, TObjectResponse } from '../object-response';

export class BaseModel {

    protected _required: string[] = [];

    public toObject<T extends object>(omitNullUndefined: boolean = false) {
        if (!omitNullUndefined) {
            const obj: Partial<T> = {};
            for (const key in this) {
                if (Object.hasOwnProperty.call(this, key) && key !== '_required') {
                    (obj as any)[key] = this[key];
                }
            }
            return obj;
        } else {
            const obj: Partial<T> = {};
            for (const key in this) {
                if (Object.hasOwnProperty.call(this, key) && key !== '_required') {
                    const value = this[key];
                    if (value === null || value === undefined) {
                        continue;
                    }
                    if (Array.isArray(value) && value.length === 0) {
                        continue;
                    }
                    (obj as any)[key] = value;
                }
            }
            return obj;
        }
    }

    public isValid(): TObjectResponse {
        for (const prop of this._required) {
            if ((this as any)[prop] === null) {
                return ObjectResponse.failure(`${this.constructor.name} validation failed: Required field "${prop}" is missing or null/undefined.`);
            }
        }

        return ObjectResponse.success;
    }
}