export interface IRestObject {
    body: (data: Object) => IRestObject;
    fetch: () => Promise<any>
    parameters: (params: Object) => IRestObject;
    toUrl: () => Promise<string | undefined>
}