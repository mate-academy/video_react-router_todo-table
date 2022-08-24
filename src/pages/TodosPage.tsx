import { todos } from '../data/todos';
import { TodoTable } from '../components/TodoTable';
import { useParams } from 'react-router-dom';


export const TodosPage = () => {
  const { todoId = 0 } = useParams();

  return <>
    <h1 className="title">Todos Page</h1>

    <TodoTable
      todos={todos}
      selectedTodoId={+todoId} />
  </>;
};
