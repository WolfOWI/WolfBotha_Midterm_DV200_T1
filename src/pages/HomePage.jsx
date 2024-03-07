// Home Page

// Import Components
import NavBar from "../components/NavBar";
import HomeHeroHeader from "../components/homeComponents/HomeHeroHeader";
import IconPointsSection from "../components/homeComponents/IconPointsSection";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <NavBar />
      <HomeHeroHeader />
      <IconPointsSection />
      <Footer />
    </div>
  );
}

export default HomePage;
