import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './assets/logo.png';
import CartWidget from '../CartWidget/cartwidget.js';

const NavbarBs = () =>{
    return(
        <Navbar className="navbar-estilos">
            <Container className="d-flex justify-content-around">
                <Navbar.Brand href="#home">
                    <img
                        src= {logo}
                        className="logo-navbar"
                        alt="Sanrio logo"
                    />
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href="#home" className="link-nav fs-5">Inicio</Nav.Link>
                    <Nav.Link href="#clothes" className="link-nav fs-5">Ropa</Nav.Link>
                    <Nav.Link href="#toys" className="link-nav fs-5">Peluches</Nav.Link>
                    <Nav.Link href="#accesories" className="link-nav fs-5">Accesorios</Nav.Link>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
} 

export default NavbarBs;