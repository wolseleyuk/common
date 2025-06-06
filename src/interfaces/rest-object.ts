export interface IRestObject {
    get: (endpointId: string) => IRestObject;
    body: (data: Object) => IRestObject;
    fetch: () => Promise<any>
    parameters: (params: Object) => IRestObject;
    toUrl: () => Promise<string | undefined>
}