import { ApiRouter } from "./apiRouter";
import TodosRouter from "./todosRouter";

export class ApiSetV1Router extends ApiRouter {
    constructor() {
        super("v1");
        this.init();
    }

    init(): void {
        this.router.use("/todos", TodosRouter);
    }
}