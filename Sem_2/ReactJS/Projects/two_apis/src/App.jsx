import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Api1 from "./pages/Api1";
import Api2 from "./pages/Api2";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/api1" element={<Api1 />} />
          <Route path="/api2" element={<Api2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
