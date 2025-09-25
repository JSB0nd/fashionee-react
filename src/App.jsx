import './App.css'
import './components/reset.css'
import './components/commons.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopPage from "./components/ShopPage.jsx";
import CartPage from "./components/CartPage.jsx";

export default function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<ShopPage />} />
              <Route path="/cart" element={<CartPage />} />
          </Routes>
      </BrowserRouter>
  );
}
