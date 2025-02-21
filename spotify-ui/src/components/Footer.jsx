import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-10 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="space-y-3">
          <h3 className="font-bold text-lg">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white hover:underline">About</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Jobs</a></li>
            <li><a href="#" className="hover:text-white hover:underline">For the Record</a></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-lg">Communities</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white hover:underline">For Artists</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Developers</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Advertising</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Investors</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Vendors</a></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-lg">Useful links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white hover:underline">Support</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Free Mobile App</a></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-lg">Spotify Plans</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white hover:underline">Premium Plans</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Premium Individual</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Premium Duo</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Premium Family</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Premium Student</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Spotify Free</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 mt-10 pt-6">
        <p className="text-gray-400 text-sm">© 2025 Spotify AB</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition">
            <FaInstagram className="text-white text-xl" />
          </a>
          <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition">
            <FaTwitter className="text-white text-xl" />
          </a>
          <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition">
            <FaFacebook className="text-white text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
