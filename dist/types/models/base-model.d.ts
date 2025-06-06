export declare class BaseModel {
    private required;
    toObject<T extends object>(omitNullUndefined?: boolean): this | Partial<T>;
    isValid(): boolean;
}
