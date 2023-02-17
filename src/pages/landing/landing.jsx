import HeroSection from '../../components/landing/heroSection';
import TrendingSection from '../../components/landing/trendingSection';
import TopCreatorsSection from '../../components/landing/topCreatorsSection';
import CategoriesSection from '../../components/landing/categoriesSection';
import Discover from '../../components/landing/discover';
import Highlight from '../../components/landing/highlight';
import Preloader from '../../components/utils/preloader';

import { fetchCollections } from '../../store/reducers/collections';
import { fetchUsers } from '../../store/reducers/users';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Main = () => {
  const dispatch = useDispatch();
  const isCollectionsLoading = useSelector((state) => state.collections.isLoading);
  const isUsersLoading = useSelector((state) => state.users.isLoading);

  useEffect(() => {
    dispatch(fetchCollections(5));
    dispatch(fetchUsers(12));
  }, []);

  if (isCollectionsLoading || isUsersLoading) return <Preloader />;
  return (
    <main>
      <div className='main'>
        <HeroSection />
        <TrendingSection />
        <TopCreatorsSection />
        <CategoriesSection />
        <Discover />
        <Highlight />
      </div>
    </main>
  );
};

export default Main;
