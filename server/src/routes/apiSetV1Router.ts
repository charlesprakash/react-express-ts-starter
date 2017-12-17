import { ApiRouter } from "./apiRouter";
import PlansRouter from "./plansRouter";

export class ApiSetV1Router extends ApiRouter {
    constructor() {
        super("v1");
        this.init();
    }

    init(): void {
        this.router.use("/plans", PlansRouter);
    }
}