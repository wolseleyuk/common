import { ObjectResponse } from "./object-response";

describe("Object Response Tests", () => {

    it("Get Success", () => {

        const expectedResult = {
            ok: true,
            message: "Completed successfully"
        }

        const result = ObjectResponse.success;

        expect(result).toStrictEqual(expectedResult);
    });

    it("To Object", () => {

        const expectedResult = {
            ok: false,
            message: "An error occurred"
        }

        const input = {
            ok: false,
            message: "An error occurred"
        }

        const result = new ObjectResponse(input).toObject();

        expect(result).toStrictEqual(expectedResult);
    });
});