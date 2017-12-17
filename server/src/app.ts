import * as express from "express";
import * as logger from "morgan";
import * as bodyParser from "body-parser";
import { ApiSetV1Router } from "./routes/ApiSetV1Router";
import { ClientApp } from "./clientApp";

// creates and configures an ExpressJS web server.
class App {

    // ref to Express instance
    public express: express.Application;

    // run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    // configure Express middleware.
    private middleware(): void {
        this.express.use(logger("dev"));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    // configure API routes.
    private routes(): void {
        // wire up all APIs through the API router
        let apiRouter = new ApiSetV1Router();
        apiRouter.routes(this.express);

        // wire up the client app
        let clientApp = new ClientApp();
        clientApp.setup(this.express);
    }
}

export default new App().express;
