const request = require("supertest");
const { server } = require("../src/server").default;

const app = server();

describe("API source | /src/controller/send-message.ts", () => {
    it("should respond to soyyo /entities/filter 200", async () => {
        const messageOk = {
            startId: 2,
            endId: 0,
        };
        const res = await request(app).post("/entities/filter").send(messageOk);
        expect(res.status).toBe(200);
    });
    it("should respond to postMessage soyyo /entities/filter 400", async () => {
        const messageBad = {
            startId: "",
            endId: 0,
        };
        const res = await request(app).post("/entities/filter").send(messageBad);
        expect(res.status).toBe(400);
    });
});
