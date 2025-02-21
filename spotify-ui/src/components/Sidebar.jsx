import { assets } from "../assets/assets";
import { FaGlobe } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-[25%] h-full flex-col p-2 hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <div className="w-[36px] h-[36px] flex items-center justify-center rounded-full hover:bg-[#2b2b2b]">
            <img src={assets.home_icon} alt="Home Icon" className="w-[24px]" />
          </div>
          <p className="font-bold">Home</p>
        </div>

        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img
            src={assets.search_icon}
            alt="Search Icon"
            className="w-[24px]"
          />
          <p className="font-bold">Search</p>
        </div>
      </div>

      <div className="bg-[#121212] h-[85%] rounded mt-[10px] flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <img
                src={assets.stack_icon}
                alt="Stack/Library"
                className="w-8"
              />
              <p className="font-semibold">Your Library</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center rounded-full hover:bg-[#2b2b2b]">
                <img
                  src={assets.plus_icon}
                  alt="Plus Icon"
                  className="w-5 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start gap-2 pl-4 rounded-xl bg-[#242424] font-semibold p-4 mt-[16px]">
            <h1 className="text-lg">Create your first playlist</h1>
            <p className="text-sm text-gray-300">It`s easy, we`ll help you</p>
            <button className="bg-white m-[10px] px-[16px] py-[6px] text-black text-[14px] font-[600] rounded-full cursor-pointer hover:bg-gray-200 hover:scale-105">
              Create playlist
            </button>
          </div>

          <div className="flex flex-col items-start justify-start gap-2 pl-4 rounded-xl bg-[#242424] font-semibold p-4 mt-[16px]">
            <h1 className="text-lg">Let`s find some podcasts to follow</h1>
            <p className="text-sm text-gray-300">
              We`ll keep you updated on new episodes
            </p>
            <button className="bg-white m-[10px] px-[16px] py-[6px] text-black text-[14px] font-[600] rounded-full cursor-pointer hover:bg-gray-200 hover:scale-105">
              Browse podcasts
            </button>
          </div>
        </div>

        <div className="text-gray-400 text-xs p-4 flex flex-col gap-2 mt-4">
          <div className="flex flex-wrap gap-3">
            <a href="#" className="hover:text-white">
              Legal
            </a>
            <a href="#" className="hover:text-white">
              Safety & Privacy Center
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white hover:underline">
              Cookies
            </a>
            <a href="#" className="hover:text-white">
              About Ads
            </a>
            <a href="#" className="hover:text-white">
              Accessibility
            </a>
          </div>

          <button className="flex items-center gap-2 border border-gray-600 pl-[4px]  pr-0 py-[4px] rounded-full hover:border-white hover:scale-105 transition mt-2 text-white text-base">
            <FaGlobe className="text-sm" />
            English
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
