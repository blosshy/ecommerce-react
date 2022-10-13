import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './assets/logo.png';
import CartWidget from '../CartWidget/cartwidget.js';
import { Link } from "react-router-dom";

const NavbarBs = () =>{
    return(
        <Navbar className="navbar-estilos">
            <Container className="d-flex justify-content-around">
                <Navbar.Brand>
                <Link to='/'>
                    <img
                        src= {logo}
                        className="logo-navbar"
                        alt="Sanrio logo"
                    />
                </Link>
                </Navbar.Brand>
                <Nav>
                    <Nav.Link><Link to='/' className="link-nav">Inicio</Link></Nav.Link>
                    <Nav.Link><Link to='/category/ropa' className="link-nav">Ropa</Link></Nav.Link>
                    <Nav.Link><Link to='/category/peluches' className="link-nav">Peluches</Link></Nav.Link>
                    <Nav.Link><Link to='/category/accesorios' className="link-nav">Accesorios</Link></Nav.Link>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
};

export default NavbarBs;