import * as express from "express";

export class BaseRouter {
    router: express.Router;

    constructor() {
        this.router = express.Router({ mergeParams: true});
    }
}
