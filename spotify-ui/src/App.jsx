import "./App.css";
import Display from "./components/Display";
import Player from "./components/Player";
import Preview from "./components/Preview";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
    <div className="h-[90%] flex">
      <Sidebar/>
      <Display/>
    </div>
    <Player/>
    <Preview/>
    </>
  );
}

export default App;
