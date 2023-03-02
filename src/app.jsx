import { Routes, Route } from 'react-router-dom';

import Register from './pages/landing/register';
import Landing from './pages/landing/landing';
import './assets/style/index.scss';
import NotFound from './pages/landing/notFound';
import Login from './pages/landing/login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/register/:component' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
