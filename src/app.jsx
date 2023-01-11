import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header';
import './assets/style/index.scss';
import Main from './pages/main';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
