import HeroSection from '../components/home/HeroSection';
import PicksSection from '../components/home/PicksSection';
import JustInSection from '../components/home/JustInSection';
import TrendingWatches from '../components/home/TrendingWatches';
import TrustBanner from '../components/home/TrustBanner';
import CollectionSection from '../components/home/CollectionSection';
import BestsellersSection from '../components/home/BestsellersSection';
import CommunitySection from '../components/home/CommunitySection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <PicksSection />
      <JustInSection />
      <TrendingWatches />
      <TrustBanner />
      <CollectionSection />
      <BestsellersSection />
      <CommunitySection />
    </div>
  );
};

export default HomePage;