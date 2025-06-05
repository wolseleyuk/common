import { mergeObjects } from "../utils";

export class BaseModel {

    public toObject<T extends object>(omitNullUndefined: boolean = false) {
        if (!omitNullUndefined) {
            return { ...this };
        } else {
            const obj: Partial<T> = {};
            for (const key in this) {
                if (Object.hasOwnProperty.call(this, key)) {
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
}