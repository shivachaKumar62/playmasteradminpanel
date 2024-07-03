import Nav from "./Nav";
import { BrowserRouter , Route, Routes } from "react-router-dom";

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
        <Route exact path="/about" element={<Aboutus />} />
        <Route exact path="/privacy-policy" element={<Privacy />} />
        <Route exact path="/terms-conditions" element={<Terms />} />
        <Route exact path="/refund-policy" element={<Refund />} />
        <Route exact path="/contact-us" element={<Contact />} />
        <Route exact path="/ourgame" element={<OurGame />} />
        <Route exact path="/bonus" element={<Bonus />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
