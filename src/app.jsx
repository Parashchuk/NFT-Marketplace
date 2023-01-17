import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header';
import Register from './pages/register';
import Landing from './pages/landing';
import './assets/style/index.scss';
import NotFound from './pages/notFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
