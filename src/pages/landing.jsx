import HeroSection from '../components/landing/heroSection';
import TrendingSection from '../components/landing/trendingSection';
import TopCreatorsSection from '../components/landing/topCreatorsSection';
import CategoriesSection from '../components/landing/categoriesSection';

const Main = () => {
  return (
    <main>
      <div className='main'>
        <HeroSection />
        <TrendingSection />
        <TopCreatorsSection />
        <CategoriesSection />
      </div>
    </main>
  );
};

export default Main;
