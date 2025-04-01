import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from './pages/AboutUs';
import PostsPage from './pages/PostsPage';
import DefaultLayout from './layout/DefaultLayout';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/posts-page" element={<PostsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}