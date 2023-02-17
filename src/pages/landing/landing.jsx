import HeroSection from '../../components/landing/heroSection';
import TrendingSection from '../../components/landing/trendingSection';
import TopCreatorsSection from '../../components/landing/topCreatorsSection';
import CategoriesSection from '../../components/landing/categoriesSection';
import Discover from '../../components/landing/discover';

const Main = () => {
  return (
    <main>
      <div className='main'>
        <HeroSection />
        <TrendingSection />
        <TopCreatorsSection />
        <CategoriesSection />
        <Discover />
      </div>
    </main>
  );
};

export default Main;
