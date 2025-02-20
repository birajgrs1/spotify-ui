import { assets } from "../assets/assets";
const Sidebar = () => {
  return (
    <div className="w-[25%] h-full flex-col p-2 hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <div className="w-[32px] h-[32px] flex items-center justify-center rounded-full hover:bg-[#2b2b2b] cursor-pointer">
            <img src={assets.home_icon} alt="Home Icon" className="w-[24px]" />
          </div>
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img
            src={assets.search_icon}
            alt="Search Icon"
            className="w-[24px] "
          />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded mt-[5px]">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <img src={assets.stack_icon} alt="Stack/Library" className="w-8" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            {/* <img src={assets.arrow_icon} alt="arrow_icon" className="w-5" /> */}
            <div className="w-[32px] h-[32px] flex items-center justify-center rounded-full hover:bg-[#2b2b2b]">
              <img
                src={assets.plus_icon}
                alt="plus_icon"
                className="w-5 cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-1 pl-4 rounded-xl bg-[#242424] font-semibold p-4 mt-[16px]">
          <h1 className="text-lg">Create your first playlist</h1>
          <p className="text-sm text-gray-300">It`s easy, we`ll help you</p>
          <button className="bg-white m-[10px] px-[16px] py-[6px] text-black text-[14px] font-[600] rounded-full cursor-pointer hover:bg-gray-200 hover:scale-105">Create playlist</button>
        </div>
        <div className="flex flex-col items-start justify-start gap-1 pl-4 rounded-xl bg-[#242424] font-semibold p-4 m-2">
          <h1 className="text-lg">Let`s find some podcasts to follow</h1>
          <p className="text-sm text-gray-300">We`ll keep you updated on new episodes</p>
          <button className="bg-white m-[10px] px-[16px] py-[6px] text-black text-[14px] font-[600] rounded-full cursor-pointer hover:bg-gray-200 hover:scale-105">Browse podcasts</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
