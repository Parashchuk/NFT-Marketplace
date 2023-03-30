import Register from './pages/landing/register';
import Landing from './pages/landing/landing';
import NotFound from './pages/landing/notFound';
import Login from './pages/landing/login';
import ConnectWallet from './pages/landing/connectWallet';
import GetStarted from './pages/landing/getStarted';
import Preloader from './components/utils/preloader';
import './assets/style/index.scss';

import { fetchCollections } from './store/reducers/collections';
import { fetchUsers } from './store/reducers/users';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Profile from './pages/main/profile';

function App() {
  const dispatch = useDispatch();
  const isCollectionsLoading = useSelector((state) => state.collections.isLoading);
  const isUsersLoading = useSelector((state) => state.users.isLoading);

  useEffect(() => {
    dispatch(fetchCollections(5));
    dispatch(fetchUsers(12));
  }, []);

  if (isCollectionsLoading || isUsersLoading) return <Preloader type={'preloader'} />;

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
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
