import { MainNav } from './components/MainNav';
import { TodosPage } from './pages/TodosPage';

import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

export const App = () => {
  const location = useLocation();

  return <>
    <MainNav />

    <div className="section">
      <p className="title">
        {location.pathname}
        {location.search}
      </p>

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
