import { TodoTable } from './components/TodoTable';
import { todos } from './data/todos';
import classNames from 'classnames';
import { Link, Navigate, NavLink, Route, Routes, useNavigate, useParams } from 'react-router-dom';

export const TodosPage = () => {
  const { todoId = 0 } = useParams();
  const navigate = useNavigate();

  return <>
    <button
      className="button is-link"
      onClick={() => {
        setTimeout(() => {
          navigate('/');
        }, 2000);
      }}
    >
      Go Home
    </button>

    <h1 className="title">Todos Page</h1>

    <TodoTable
      todos={todos}
      selectedTodoId={+todoId}
    />
  </>;
};

export const App = () => {
  return <>
    <nav className="navbar is-light px-3">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src="/logo.svg" alt="MA" className="logo" />
        </Link>

        <NavLink
          to="/"
          className={({ isActive }) => classNames('navbar-item', { 'is-active': isActive })}
          style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
        >
          Home
        </NavLink>

        <NavLink
          to="todos"
          className={({ isActive }) => classNames('navbar-item', { 'is-active': isActive })}
          style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
        >
          Todos
        </NavLink>
      </div>
    </nav>

    <div className="section">
      <Routes>
        <Route path="todos">
          <Route index element={<TodosPage />} />
          <Route path=":todoId" element={<TodosPage />} />
        </Route>

        <Route path="/" element={<h1 className="title">Home Page</h1>} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </div>
  </>;
};
