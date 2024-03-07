// Icon points (home page)

// Import icons
import PetsRoundedIcon from "@mui/icons-material/PetsRounded";
import DonutSmallRoundedIcon from "@mui/icons-material/DonutSmallRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

function IconPointsSection() {
  return (
    // <!-- Icon Blocks -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
        {/* <!-- Icon Block 1 --> */}
        <div
          class="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 "
          href="#"
        >
          <div class="flex justify-center items-center size-12 bg-blue-600 rounded-xl text-white">
            <PetsRoundedIcon />
          </div>
          <div class="mt-5">
            <h3 class="cursor-default group-hover:text-gray-600 text-lg font-semibold text-gray-800">
              Fun Facts
            </h3>
            <p class="mt-1 text-gray-600">
              Discover intriguing and fun facts about nine different pets, enriching your knowledge
              and understanding of each unique companion.
            </p>
          </div>
        </div>
        {/* <!-- End Icon Block 1 --> */}

        {/* <!-- Icon Block 2 --> */}
        <div
          class="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 "
          href="#"
        >
          <div class="flex justify-center items-center size-12 bg-blue-600 rounded-xl text-white">
            <InsightsRoundedIcon />
          </div>
          <div class="mt-5">
            <h3 class="cursor-default group-hover:text-gray-600 text-lg font-semibold text-gray-800">
              Statistics
            </h3>
            <p class="mt-1 text-gray-600">
              Explore fascinating and comprehensive statistics that reveal insightful trends and
              patterns in pet ownership, care, and so much more.
            </p>
          </div>
        </div>
        {/* <!-- End Icon Block --> */}

        {/* <!-- Icon Block --> */}
        <div
          class="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 "
          href="#"
        >
          <div class="flex justify-center items-center size-12 bg-blue-600 rounded-xl text-white">
            <DonutSmallRoundedIcon />
          </div>
          <div class="mt-5">
            <h3 class="cursor-default group-hover:text-gray-600 text-lg font-semibold text-gray-800">
              Charts and Graphs
            </h3>
            <p class="mt-1 text-gray-600">
              Visualize the world of pets and their chaos through vibrant charts, making complex
              data easily understandable and engaging.
            </p>
          </div>
        </div>
        {/* <!-- End Icon Block --> */}

        {/* <!-- Icon Block --> */}
        <div
          class="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 "
          href="#"
        >
          <div class="flex justify-center items-center size-12 bg-blue-600 rounded-xl text-white">
            <FavoriteRoundedIcon />
          </div>
          <div class="mt-5">
            <h3 class="cursor-default group-hover:text-gray-600 text-lg font-semibold text-gray-800">
              Pet Lovers Unite
            </h3>
            <p class="mt-1 text-gray-600">
              Connect with a community of pet lovers, sharing experiences and tips for nurturing a
              happy, healthy relationship with your pets.
            </p>
          </div>
        </div>
        {/* <!-- End Icon Block --> */}
      </div>
    </div>
  );
}

export default IconPointsSection;
