import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import { Home } from "./pages/home";
import Contact from "./pages/contact";
import Tabs from "./pages/tabs";
import Footer from "./components/footer";
import DemoPage from "./pages/demoPage";
import Subscribe from "./pages/pay";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Tabs />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/pay" element={<Subscribe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
