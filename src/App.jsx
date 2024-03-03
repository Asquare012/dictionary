import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/templates/Home";
import Definition from "./components/templates/Definition";

const App = () => {
  return (
    <div className="App">
      <div className="App-container">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/definition/:word" element={<Definition />}></Route>
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
};

export default App;
