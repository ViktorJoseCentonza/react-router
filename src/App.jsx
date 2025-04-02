import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from './pages/Contacts';
import Products from './pages/Products';
import Product from './pages/Product';
import DefaultLayout from './layout/DefaultLayout';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>

          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products" element={<Products />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}