// Pet Types Page

// Import Components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AnimalCard from "../components/typesComponents/AnimalCard";

function PetTypesPage() {
  return (
    <div>
      <NavBar />
      <h1 class="pb-7 text-center text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
        Fun Pet Facts
      </h1>
      <div className="flex justify-center">
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimalCard type="Cat" />
          <AnimalCard type="Dog" />
          <AnimalCard type="Fish" />
          <AnimalCard type="Hamster" />
          <AnimalCard type="Hedgehog" />
          <AnimalCard type="Parrot" />
          <AnimalCard type="Rabbit" />
          <AnimalCard type="Rat" />
          <AnimalCard type="Turtle" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PetTypesPage;
