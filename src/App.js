import Nav from "./Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Aboutus from "./Aboutus";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";
import Contact from "./pages/Contact";
import ScrollTop from "./ScrollTop";
import OurGame from "./pages/OurGame";
import Bonus from "./pages/Bonus";
function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route exact path="/" element={<Nav />} />
        <Route  path="/about" element={<Aboutus />} />
        <Route  path="/privacy-policy" element={<Privacy />} />
        <Route  path="/terms-conditions" element={<Terms />} />
        <Route  path="/refund-policy" element={<Refund />} />
        <Route  path="/contact-us" element={<Contact />} />
        <Route  path="/ourgame" element={<OurGame />} />
        <Route  path="/bonus" element={<Bonus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
