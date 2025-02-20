import { assets, songsData } from "../assets/assets";

const Player = () => {
  return (
    <div className="flex justify-between items-center px-[16px] h-[10%] ">
      <div className="hidden lg:flex items-center gap-4">
        <img
          src={songsData[0].image}
          className="w-12"
          alt="Songs data desc..."
        />
        <div>
          <p>{songsData[0].name}</p>
          <p>{songsData[0].desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            src={assets.shuffle_icon}
            className="w-4 cursor-pointer"
            alt="Suffle icon"
          />
          <img
            src={assets.prev_icon}
            className="w-4 cursor-pointer"
            alt="Previous icon"
          />
          <img
            src={assets.play_icon}
            className="w-4 cursor-pointer"
            alt="Play icon"
          />
          <img
            src={assets.next_icon}
            className="w-4 cursor-pointer"
            alt="Next icon"
          />
          <img
            src={assets.loop_icon}
            className="w-4 cursor-pointer"
            alt="Loop icon"
          />
        </div>
        <div className="flex items-center gap-3">
          <p className="text-sm">1:06</p>
          <div className="relative w-[60vw] max-w-[500px] h-2 bg-gray-300 rounded-full cursor-pointer">
            <div className="absolute top-0 left-0 h-2 w-0 bg-blue-600 rounded-full"></div>
          </div>
          <p className="text-sm">3:20</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img src={assets.plays_icon} alt="Plays icon" className="w-4"/>
        <img src={assets.mic_icon} alt="Mic icon" className="w-4"/>
        <img src={assets.queue_icon} alt="Queue icon" className="w-4"/>
        <img src={assets.speaker_icon} alt="Speaker icon" className="w-4"/>
        <img src={assets.volume_icon} alt="Volume icon" className="w-4"/>
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img src={assets.mini_player_icon} alt="mini player icon" className="w-4"/>
        <img src={assets.zoom_icon} alt="zoom icon" className="w-4"/>
 
      </div>
    </div>
  );
};

export default Player;
