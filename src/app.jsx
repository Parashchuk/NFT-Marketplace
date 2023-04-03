import Register from './pages/landing/register';
import Landing from './pages/landing/landing';
import NotFound from './pages/landing/notFound';
import Login from './pages/landing/login';
import ConnectWallet from './pages/landing/connectWallet';
import GetStarted from './pages/landing/getStarted';
import Profile from './pages/main/profile';
import Header from './components/main/header';
import Preloader from './components/utils/preloader';
import './assets/style/index.scss';

import { fetchCollections } from './store/reducers/collections';
import { fetchUsers } from './store/reducers/users';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const isCollectionsLoading = useSelector((state) => state.collections.isLoading);
  const isUsersLoading = useSelector((state) => state.users.isLoading);
  const isAuth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    dispatch(fetchCollections(5));
    dispatch(fetchUsers(12));
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = isAuth ? '#202225' : '#2b2b2b';
  }, [isAuth]);

  if (isCollectionsLoading || isUsersLoading) return <Preloader type={'preloader'} />;

  return (
    <>
      {isAuth && <Header />}
      <Routes>
        {isAuth ? (
          <Route path='/' element={<Profile />} />
        ) : (
          <Route path='/' element={<Landing />} />
        )}
        <Route path='/connectWallet' element={<ConnectWallet />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/get-started' element={<GetStarted />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
