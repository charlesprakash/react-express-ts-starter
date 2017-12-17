import { Request, Response, NextFunction } from "express";
import { BaseRouter } from "./BaseRouter";
import { TodosController } from "../controllers/todosController";

class PlansRouter extends BaseRouter {
    controller: PlansController;

    constructor() {
        super();

        this.controller = new PlansController();
        this.init();
    }

    public getAll(req: Request, res: Response, next: NextFunction) {
        res.json(this.controller.getPlans());
    }

    init(): void {
        this.router.get("/", (req, res, next) => this.getAll(req, res, next));
    }
}

export default new PlansRouter().router;
