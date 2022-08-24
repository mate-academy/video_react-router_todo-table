import classNames from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Todo } from '../types';

type Props = {
  todos: Todo[];
  selectedTodoId?: number;
};

export const TodoTable: FC<Props> = ({ todos, selectedTodoId = 0 }) => {
  const isSelected = (todo: Todo) => todo.id === selectedTodoId;

  return (
    <table className="table is-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Done</th>
          <th />
        </tr>
      </thead>

      <tbody>
        {todos.map(todo => (
          <tr
            key={todo.id}
            className={classNames({
              'has-background-grey-light': isSelected(todo),
            })}
          >
            <td className="is-vcentered has-text-weight-bold">{todo.id}</td>
            <td className="is-vcentered">{todo.title}</td>
            <td className="is-vcentered">
              {todo.completed ? (
                <span className="icon has-text-success">
                  <i className="fas fa-check" />
                </span>
              ) : (
                <span className="icon has-text-danger ">
                  <i className="fas fa-xmark" />
                </span>
              )}
            </td>
            <td>
              <Link
                to={isSelected(todo) ? '../' : `../${todo.id}`}
                className={classNames('button', {
                  'is-info': isSelected(todo),
                })}
              >
                <span className="icon">
                  <i className={classNames('fas', {
                    'fa-eye': !isSelected(todo),
                    'fa-eye-slash': isSelected(todo),
                  })} />
                </span>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
