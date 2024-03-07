// Import Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import HomePage from "./pages/HomePage";
import PetChartsPage from "./pages/PetChartsPage";
import PetTypesPage from "./pages/PetTypesPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/types" element={<PetTypesPage />} />
          <Route path="/charts" element={<PetChartsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
