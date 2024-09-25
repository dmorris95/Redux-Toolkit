import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavigationBar() {
    return (
        <Navbar bg='light' expand='lg'>
            <Navbar.Brand href='/' className='m-2'>Module 12: Lesson 2</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='mr-auto'>
                    <Nav.Link as={NavLink} to='/' activeclassname='active'>
                        Home
                    </Nav.Link>
                    <Nav.Link as={NavLink} to='/exercises' activeclassname='active'>
                        Exercises
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar