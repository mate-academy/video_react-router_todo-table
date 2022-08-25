import { todos } from '../data/todos';
import { TodoTable } from '../components/TodoTable';
import { useParams } from 'react-router-dom';
import { Filters } from '../components/Filters';


export const TodosPage = () => {
  const { todoId = 0 } = useParams();

  return <>
    <Filters />

    <TodoTable
      todos={todos}
      selectedTodoId={+todoId} />
  </>;
};
