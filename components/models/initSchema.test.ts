import { initSchema } from "./initSchema";

describe("initSchema", () => {
    it("should return a schema", () => {
        const schema = {
            name: "Test",
            properties: {
                id: "string",
                name: "string",
            },
        };
        expect(initSchema(schema)).toBeTruthy();
    })
})