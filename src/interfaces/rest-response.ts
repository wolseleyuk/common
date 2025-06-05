export interface IRestResponse {
    body: Object;
    response: IResp;
}

interface IResp {
    body: ReadableStream;
    bodyused: boolean;
    ok: boolean;
    redirected: boolean;
    status: number;
    statusText: string;
    type: string;
    url: string;
}