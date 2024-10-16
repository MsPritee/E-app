import "./App.css";
import Header from "./components/header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import About from "./pages/About";
import Listing from "./pages/Listing/listing";
import Footer from "./components/footer/footer";
import NotFound from "./pages/NotFound/notFound";
import DetailsPage from "./pages/Details/Detail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/listing" element={<Listing />} />
        <Route exact={true} path="*" element={<NotFound />} />
        <Route exact={true} path="/product/details" element={<DetailsPage />} />
        {/* <Route exact={true} path="/about" element={<About />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
