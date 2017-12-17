import * as request from "supertest";
import app from "../src/app";

const apiPrefix: string = "/api/v1/todos";
const getAllTodosUrl: string = apiPrefix + "/";

describe("todos api", () => {
    it("should return 200 OK", () => {
        return request(app)
            .get(getAllTodosUrl)
            .expect(200);
    });
});