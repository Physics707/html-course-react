
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroScreen from "./components/IntroScreen";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Module1 from "./pages/Module1";
import Module2 from "./pages/Module2";
import Module3 from "./pages/Module3";
import Module4 from "./pages/Module4";
import Module5 from "./pages/Module5";
import Module6 from "./pages/Module6";
import FinalTest from "./pages/FinalTest";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <IntroScreen />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/module1" element={<Module1 />} />
            <Route path="/module2" element={<Module2 />} />
            <Route path="/module3" element={<Module3 />} />
            <Route path="/module4" element={<Module4 />} />
            <Route path="/module5" element={<Module5 />} />
            <Route path="/module6" element={<Module6 />} />
            <Route path="/final" element={<FinalTest />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
