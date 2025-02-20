import "./App.css";
import Player from "./components/Player";
import Preview from "./components/Preview";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
    <div className="h-[90%] flex">
      <Sidebar/>
    </div>
    <Player/>
    <Preview></Preview>
    </>
  );
}

export default App;
