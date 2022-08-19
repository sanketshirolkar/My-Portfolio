import Navbar from "./components/navbar/Navbar";
import Intro from "./components/introduction/Intro";
import Details from "./components/details/Details";
import "./app.scss";


function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Intro />
        <Details />
      </div>
    </div>
  );
}

export default App;
