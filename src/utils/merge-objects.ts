export function mergeObjects<T extends Record<string, any>, U extends Record<string, any>>(
    target: T,
    source: U
): Partial<T> {
    const result: Partial<T> = {};

    for (const key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                result[key as keyof T] = source[key as keyof U];
            } else {
                result[key as keyof T] = target[key];
            }
        }
    }
    return result;
}