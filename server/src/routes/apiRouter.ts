import * as express from "express";
import { BaseRouter } from "./BaseRouter";

export class ApiRouter extends BaseRouter {
  readonly path: string;

  constructor(readonly version : string = "v1") {
    super();

    this.path = "/api/" + version;
  }

  setup(express: express.Application): void {
    express.use(this.path, this.router);
  }

  addRouter(pathToRoute: string, router: express.Router) {
    this.router.use(pathToRoute, router);
  }
}
