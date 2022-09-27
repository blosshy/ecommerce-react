import './App.css';
import NavbarBs from './components/Navbar/navbar.js';
import ItemListContainer from './components/ItemListContainer/itemlistcontainer.js';

function App() {
  return (
    <div className="App">
      <NavbarBs/>
      <ItemListContainer greeting={"¡Bienvenidos a la tienda oficial de Sanrio Argentina!"}/>
    </div>
  );
}

export default App;
