import { HashRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Projectpage from "./pages/Projectpage";
import Contactpage from "./pages/Contactpage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/project" element={<Projectpage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;