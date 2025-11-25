import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RestaurantDetails from "./pages/RestaurantDetails";
import Navbar from "./components/Navbar";
//import CarouselPage from "./pages/CarouselPage";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        {/* <Route path="/carousel" element={<CarouselPage />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
