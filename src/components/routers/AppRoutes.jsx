import { Route, Routes } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import ProductList from "../ProductList/ProductList";
import ProductDetails from "../ProductDetail/ProductDetails";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";
import Login from "../Login/Login";
import Navbar from "../Navbar/Navbar";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "100px" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:categoryName" element={<ProductList />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/product/:productId/details"
            element={<ProductDetails />}
          />
        </Routes>
      </div>
    </>
  );
};

export default AppRoutes;
