import HeroSection from '../../components/landing/heroSection';
import TrendingSection from '../../components/landing/trendingSection';
import TopCreatorsSection from '../../components/landing/topCreatorsSection';
import CategoriesSection from '../../components/landing/categoriesSection';
import Discover from '../../components/landing/discover';
import Highlight from '../../components/landing/highlight';
import Instructions from '../../components/landing/instructions';
import SubscribeWidget from '../../components/landing/subscribeWidget';
import LandingFooter from '../../components/landing/footer';
import LandingHeader from '../../components/landing/header';

const Main = () => {
  return (
    <main>
      <div className='main'>
        <LandingHeader />
        <HeroSection />
        <TrendingSection />
        <TopCreatorsSection />
        <CategoriesSection />
        <Discover />
        <Highlight />
        <Instructions />
        <SubscribeWidget />
        <LandingFooter />
      </div>
    </main>
  );
};

export default Main;
