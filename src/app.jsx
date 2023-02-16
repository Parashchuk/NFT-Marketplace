import { Routes, Route } from 'react-router-dom';

import Header from './components/landing/header';
import Register from './pages/landing/register';
import Landing from './pages/landing/landing';
import './assets/style/index.scss';
import NotFound from './pages/landing/notFound';
import Login from './pages/landing/login';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
