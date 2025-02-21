import "./App.css";
import Display from "./components/Display";
import Footer from "./components/Footer";
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
    <Footer/>
    <Preview/>
    </>
  );
}

export default App;
