import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function NavMenu(props) {
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Navbar.Brand href='/'>IronRooms</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='mr-auto'>
					<Link to='/'>Home</Link>
					<Link to='/my-rooms'>My Rooms</Link>
					<Link to='/new-room'>New Room</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
export default NavMenu;
