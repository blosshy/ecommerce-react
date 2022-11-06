import './App.css';
import NavbarBs from './components/Navbar/navbar.js';
import ItemListContainer from './components/ItemListContainer/itemlistcontainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/itemdetailcontainer.js';
import Checkout from './components/Checkout/checkout.js';
import Cart from './components/Cart/cart.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/cartcontext.js';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavbarBs/>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/detail/:productId" element={<ItemDetailContainer/>} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
};

export default App;
