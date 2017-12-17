import { Request, Response, NextFunction } from "express";
import { BaseRouter } from "./BaseRouter";
import { TodosController } from "../controllers/todosController";

class TodosRouter extends BaseRouter {
    controller: TodosController;

    constructor() {
        super();

        this.controller = new TodosController();
        this.init();
    }

    public getAll(req: Request, res: Response, next: NextFunction) {
        res.json(this.controller.getTodos());
    }

    init(): void {
        this.router.get("/", (req, res, next) => this.getAll(req, res, next));
    }
}

export default new TodosRouter().router;
