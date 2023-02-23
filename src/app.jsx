import { Routes, Route } from 'react-router-dom';

import LandingHeader from './components/landing/header';
import Register from './pages/landing/register';
import Landing from './pages/landing/landing';
import './assets/style/index.scss';
import NotFound from './pages/landing/notFound';
import Login from './pages/landing/login';

function App() {
  return (
    <>
      <LandingHeader />
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
