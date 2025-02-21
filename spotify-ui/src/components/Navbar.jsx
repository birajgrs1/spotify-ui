import { assets } from "../assets/assets"
import { GrInstallOption } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className="flex justify-between items-center font-semibold w-full ">
        <div className="flex items-center gap-2">
            <img src={assets.arrow_left} alt="Left arrow" className=" w-8 p-2 rounded-2xl cursor-pointer" onClick={()=>navigate(-1)}/>
            <img src={assets.arrow_right} alt="Right arrow" className=" w-8 p-2 rounded-2xl cursor-pointer" onClick={()=>navigate(+1)}/>
        </div>
        <div className="flex items-center gap-4">
            <p className="text-gray-300 hover:text-white hover:scale-105 cursor-pointer">Premium</p>
            <p className="text-gray-300 hover:text-white hover:scale-105 cursor-pointer">Support</p>
            <p className="text-gray-300 hover:text-white hover:scale-105 cursor-pointer">Download</p>
            <span className="gap-5"> | </span>
            <p className="text-gray-300 hover:text-white hover:scale-105 cursor-pointer"><GrInstallOption className="inline gap-1 mb-[4px]"/> Install App</p>
            <p className="text-gray-300 hover:text-white hover:scale-105 cursor-pointer gap-[32px]"> Sign up </p>
            <button className="bg-white rounded-full px-[22px] py-[12px] m-2 text-black hover:scale-105">Log in </button>    
        </div>   
    </div>
    <div className="flex gap-2 mt-4 items-center">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">All</p>
        <p className=" text-white bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
        <p className=" text-white bg-black px-4 py-1 rounded-2xl cursor-pointer">Podcasts</p>

    </div>
   </>
  )
}

export default Navbar