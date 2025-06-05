export class AxiosRestResponse {
    constructor(obj) {
        this.body = obj.data;
        this.response = {
            body: new ReadableStream(obj.data),
            bodyused: true,
            ok: obj.statusText === 'OK',
            redirected: false,
            status: obj.status,
            statusText: obj.statusText,
            type: '',
            url: obj.config.url
        };
    }
    toObject() {
        return { ...this };
    }
}
//# sourceMappingURL=axios-rest-response.js.map