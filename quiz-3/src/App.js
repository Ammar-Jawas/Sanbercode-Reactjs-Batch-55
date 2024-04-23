import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ManageData from "./components/ManageData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/managed-data" element={<ManageData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
