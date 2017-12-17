import * as express from "express";
import { BaseRouter } from "./BaseRouter";

export class ApiRouter extends BaseRouter {
  constructor(readonly version : string = "v1") {
    super();
  }

  routes(express: express.Application): void {
    express.use("/api/" + this.version, this.router);
  }
}
