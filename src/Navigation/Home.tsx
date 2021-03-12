import Discover from "../Components/Discover";
import Hero from "../Components/Hero";
import LatestSection from "../Components/LatestSection";
import imageSources from "../assets/imageSources";

function Home() {
  return (
    <div>
      <Hero
        label="Bhagwan Yoga"
        title="Yoga essentials for everyone"
        bgImg={imageSources.homePageHero}
      />
      <LatestSection />
      <Discover />
    </div>
  );
}

export default Home;
