import HeroSection from '../components/mainComponents/heroSection';
import TrendingSection from '../components/mainComponents/trendingSection';
import TopCreatorsSection from '../components/mainComponents/topCreatorsSection';
import CategoriesSection from '../components/mainComponents/categoriesSection';

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
