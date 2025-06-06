export class BaseModel {

    private required: string[] = [];

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

    public isValid(): boolean {
        for (const prop of this.required) {
            if ((this as any)[prop] === null) {
                throw new Error(`${this.constructor.name} validation failed: Required field "${prop}" is missing or null/undefined.`);
            }
        }

        return true;
    }
}