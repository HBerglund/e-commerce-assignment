import Discover from "../Components/Discover";
import Hero from "../Components/Hero";
import LatestSection from "../Components/LatestSection";
import imageSources from "../assets/imageSources";
import Footer from "../Components/Footer";
import { useContext } from "react";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";

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
      <Footer />
    </div>
  );
}

export default Home;
