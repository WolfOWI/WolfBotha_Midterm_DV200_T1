// Home Hero header

// Import Link for navigation
import { Link } from "react-router-dom";

// Import Icons
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";

// Import Images
import dogCatScaredImg from "../../assets/img/dog&catScared.jpg";

function HomeHeroHeader() {
  return (
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      {/* <!-- Grid --> */}
      <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
            Learn about your <span class="text-blue-600">fluffy</span> friends
          </h1>
          <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">
            The best place to find information, statistics and fun facts about of your pets across
            the world!
          </p>

          {/* <!-- Buttons --> */}
          <div class="mt-7 grid gap-3 w-full sm:inline-flex">
            <Link
              to="/types"
              class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Pet Types
            </Link>
            <Link
              to="/charts"
              class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Charts & Graphs
              <BarChartRoundedIcon />
            </Link>
          </div>
          {/* <!-- End Buttons --> */}
        </div>
        {/* <!-- End Col --> */}

        <div class="relative ms-4">
          <img class="w-full rounded-md" src={dogCatScaredImg} alt="cute dog" />
        </div>
        {/* <!-- End Col --> */}
      </div>
      {/* <!-- End Grid --> */}
    </div>
  );
}

export default HomeHeroHeader;
