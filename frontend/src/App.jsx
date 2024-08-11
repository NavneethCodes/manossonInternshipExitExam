
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Add from "./components/Add";
import Home from "./components/Home";
//Write missing code here

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  );
}

export default App;
