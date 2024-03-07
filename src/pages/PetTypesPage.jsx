// Pet Types Page

// Import Components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AnimalCard from "../components/typesComponents/AnimalCard";

function PetTypesPage() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center">
        <div className="container grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimalCard />
          <AnimalCard />
          <AnimalCard />
          <AnimalCard />
          <AnimalCard />
          <AnimalCard />
          <AnimalCard />
          <AnimalCard />
          <AnimalCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PetTypesPage;
