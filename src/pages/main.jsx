import HeroSection from '../components/main/heroSection';
import TrendingSection from '../components/main/trendingSection';
import TopCreatorsSection from '../components/main/topCreatorsSection';
import CategoriesSection from '../components/main/categoriesSection';

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
