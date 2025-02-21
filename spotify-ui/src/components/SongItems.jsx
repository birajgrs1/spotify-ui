import PropTypes from "prop-types";
import { useContext } from "react";
import { playerContext } from "../context/store/musicStore";

const SongItems = ({ image, name, desc, id }) => {
  const {playWithClick} =  useContext(playerContext)
  return (
    <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]" onClick={()=>playWithClick(id)}>
      <img src={image} alt="" className="rounded" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-sm text-slate-200">{desc}</p>
    </div>
  );
};

SongItems.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default SongItems;
