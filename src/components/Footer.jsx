// Footer

// Import Link
import { Link } from "react-router-dom";

// Import Icons
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";

// Import Imgs
import guineaPigLogo from "../assets/logo/guineaPigLogo.svg";

function Footer() {
  return (
    <footer class="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      {/* <!-- Grid --> */}
      <div class="text-center">
        <div className="flex justify-center">
          <Link to="/">
            <img src={guineaPigLogo} alt="Paws Guinea Pig logo" class="w-16" />
          </Link>
        </div>
        {/* <!-- End Col --> */}
        <div class="mt-3">
          <p class="text-black font-bold">Whiskers Wiki</p>
          <p class="text-gray-500">© 2024 | Wolf Botha | 21100255 | All rights reserved.</p>
        </div>

        {/* <!-- Social Brands --> */}
        <div class="mt-3 space-x-2">
          <a
            class="inline-flex justify-center items-center size-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
            href="#"
          >
            <FacebookRoundedIcon />
          </a>
          <a
            class="inline-flex justify-center items-center size-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
            href="#"
          >
            <MailRoundedIcon />
          </a>
          <a
            class="inline-flex justify-center items-center size-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
            href="#"
          >
            <CallRoundedIcon />
          </a>
        </div>
        {/* <!-- End Social Brands --> */}
      </div>
      {/* <!-- End Grid --> */}
    </footer>
  );
}

export default Footer;
