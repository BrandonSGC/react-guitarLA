import { Route, Routes } from "react-router-dom";
import { Home, AboutUs, Blog, Store, Guitar, Cart } from "./pages/";
import { Footer, Header } from "./layouts";
import { ScrollToTop } from "./components";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/guitar/:id" element={<Guitar />} />
        <Route path="/store/cart" element={<Cart />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </CartProvider>
  );
}

export default App;
