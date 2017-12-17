import * as React from 'react';
import TodoDetails from 'models/todoDetails';
import controller from '../controllers/todos';
import './todos.css';

class TodosComponentState {
    todos: TodoDetails[];

    constructor(t: TodoDetails[] = []) {
        this.todos = t;
    }
}

class Todos extends React.Component<{}, TodosComponentState> {
    constructor(props: {}) {
        super(props);

        this.state = new TodosComponentState();
    }

    componentDidMount() {
        controller.getTodos().then(data => {
            this.setState(new TodosComponentState(data));
        });
    }

    render(): React.ReactNode {
        return (
            <div className="Todos">
                <ul>
                    {
                        this.state.todos.map(todo => {
                            return <li>{ todo.name }</li>;
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Todos;
