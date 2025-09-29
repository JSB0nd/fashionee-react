import './App.css'
import './styles/reset.css'
import './styles/commons.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopPage from "./components/Shop.jsx";
import CartPage from "./components/Cart.jsx";

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
