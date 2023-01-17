import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header';
import Register from './pages/register';
import Main from './pages/main';
import './assets/style/index.scss';
import NotFound from './pages/notFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
