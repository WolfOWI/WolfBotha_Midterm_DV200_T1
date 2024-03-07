// Pet Charts Page

// Chart JS Import
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Line, Doughnut, PolarArea, Pie } from "react-chartjs-2";

// Import Components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// Import Data (for charts)
import petsAdoptedData from "../data/petsAdopted.json";
import walkingTimeData from "../data/walkingTime.json";
import typesOwnedData from "../data/typesOwned.json";
import petFoodConsumpData from "../data/petFoodConsumption.json";
import reasonsForChoosingData from "../data/reasonsForChoosing.json";

function PetChartsPage() {
  return (
    <div>
      <NavBar />
      <h1 class="pb-7 text-center text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
        Stats & Charts
      </h1>
      <div className="flex justify-center">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Graph 01 */}
          <div className="p-5 bg-slate-50 rounded-2xl">
            <h2 className="text-center">Pets adopted</h2>
            <Bar
              data={petsAdoptedData}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>
          {/* Graph 02 */}
          <div className="p-5 bg-slate-50 rounded-2xl">
            <h2 className="text-center">Walking Time - Mins</h2>
            <Line data={walkingTimeData} />
          </div>
          {/* Graph 03 */}
          <div className="p-5 bg-slate-50 rounded-2xl">
            <h2 className="text-center">Type of Pets Owned</h2>
            <Doughnut data={typesOwnedData} />
          </div>
          {/* Graph 04 */}
          <div className="p-5 bg-slate-50 rounded-2xl">
            <h2 className="text-center">Monthly Pet Food Consumption</h2>
            <PolarArea data={petFoodConsumpData} />
          </div>
          {/* Graph 05 */}
          <div className="p-5 bg-slate-50 rounded-2xl">
            <h2 className="text-center">Reasons for Choosing</h2>
            <Pie data={reasonsForChoosingData} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PetChartsPage;
