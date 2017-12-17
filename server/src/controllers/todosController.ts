import TodoDetails from "../models/todoDetails";

export class TodosController {
    getTodos(): TodoDetails[] {
        return [
            new TodoDetails("1", "Plan winter vacation"),
            new TodoDetails("2", "Sort pictures in OneDrive"),
            new TodoDetails("3", "Send evites for birthday party"),
            new TodoDetails("4", "Complete react starter kit")
        ];
    }
}