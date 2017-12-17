import * as express from "express";
import * as logger from "morgan";
import * as bodyParser from "body-parser";
import { ApiRouter } from "./routes/apiRouter";
import { ClientApp } from "./clientApp";
import * as routers from "./routes/routers";

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

    // configure routes.
    private routes(): void {
        // wire up the API routes
        this.apiRoutes();

        // wire up the client app
        let clientApp = new ClientApp();
        clientApp.setup(this.express);
    }

    // wire up the API routes
    private apiRoutes() : void {
        this.apiV1Routes();
        this.apiV2Routes();
    }

    // wire up routes under /api/v1
    private apiV1Routes() : void {
        let apiRouter = new ApiRouter();    // default version is v1

        // add routers
        apiRouter.addRouter("/todos", routers.todosRouter);

        // finally set it up
        apiRouter.setup(this.express);
    }

    // wire up routes under /api/v2
    private apiV2Routes() : void {
        // wire up v2 routes
        let apiRouter = new ApiRouter("v2");

        // add other routers below this line
        // finally set it up
        apiRouter.setup(this.express);

    }
}

export default new App().express;
