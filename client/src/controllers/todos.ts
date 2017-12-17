import TodoDetails from 'models/todoDetails';

const apiRoot = '/api/v1/todos';

class TodosController {
    getTodos(): Promise<TodoDetails[]> {
        return fetch(apiRoot + '/')
            .then(result => result.json());
    }
}

export default new TodosController();
