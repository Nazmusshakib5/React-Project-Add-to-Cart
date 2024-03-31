import { Navbar,Nav,Container,Button } from "react-bootstrap";
import Helper from "../utility/helper";
import {NavLink,Link} from 'react-router-dom';
import logo from '../assets/images/logo.svg'

const AppNavBar = () => {
        const logoutHandler=()=>{
            sessionStorage.clear();
            window.location.href='/';
        }
    return (
        <Navbar expand="lg" className="bg-white px-2 shadow-sm">
        <Container fluid>
        <Navbar.Brand href="#">
            <img className="navLogo" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
            className="me-auto my-2 my-lg-0 fs-5"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
            <NavLink className='nav-link' to='/'>Home</NavLink>
            {
                Helper.isLogin() && (<NavLink className='nav-link' to='/cart-list'>Cart List</NavLink>)
            }
                
            {/* using NavLink from  react router dom */}
            </Nav>
                {
                    Helper.isLogin()?(<Button className="btn btn-danger px-4 py-2 fs-5" onClick={logoutHandler}>Log Out</Button>):
                    (<Link className="btn btn-danger px-4 py-2 fs-5" to='/login'>Log In</Link>)
                } 
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default AppNavBar;