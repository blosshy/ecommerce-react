import './App.css';
import NavbarBs from './components/Navbar/navbar.js';
import ItemListContainer from './components/ItemListContainer/itemlistcontainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/itemdetailcontainer.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarBs/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detail/:productId" element={<ItemDetailContainer/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
