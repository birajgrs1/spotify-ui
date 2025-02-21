import { useContext } from "react";
import "./App.css";
import Display from "./components/Display";
import Footer from "./components/Footer";
import Player from "./components/Player";
import Preview from "./components/Preview";
import Sidebar from "./components/Sidebar";
import { playerContext } from "./context/store/musicStore";

function App() {
  const {audioRef,track} = useContext(playerContext);
  return (
    <>
    <div className="h-[90%] flex">
      <Sidebar/>
      <Display/>
    </div>
    <Player/>
    <audio preload="auto" ref={audioRef} src={track.file}></audio>
    <Footer/>
    <Preview/>
    </>
  );
}

export default App;
