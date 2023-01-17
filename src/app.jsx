import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header';
import Register from './pages/register';
import Main from './pages/main';
import './assets/style/index.scss';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
