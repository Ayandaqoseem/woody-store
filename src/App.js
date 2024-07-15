import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import NewArrivals from "./components/NewArrivals";
import TopRated from "./components/TopRatec";
import Featured from "./components/Featured";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import Header from "./components/header/Header";
import ProductDetails from "./pages/product/ProductDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./checkout/Checkout";
import Payment from "./checkout/Payment";
import NotFoundPage from "./pages/404/NotFoundPage";

function App() {
  const location = useLocation();
  return (
    <>
    <ToastContainer />
    <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/payment" element={<Payment />} />
      
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
