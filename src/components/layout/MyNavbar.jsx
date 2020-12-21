import React from 'react';
import { Navbar, NavDropdown, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';

const MyNavbar = () => {
	const firebase = useFirebase();
	return (
		<div>
			<Navbar
				collapseOnSelect
				expand='lg'
				variant='dark'
				className='shadow nav__background'
			>
				<Link to='/' className='navbar-brand font-weight-bold'>
					Student Bio
				</Link>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='ml-auto'>
						<Link
							to='/StudentForm'
							variant='outline-warning'
							className='btn btn-outline-warning'
						>
							Add Student
						</Link>
						<Nav.Link href='#pricing'>Admin</Nav.Link>
						<NavDropdown
							title='Prashant Raut'
							id='collasible-nav-dropdown'
							className='mr-5'
						>
							<NavDropdown.Item href='#action/3.1'>Profile</NavDropdown.Item>
							<NavDropdown.Item href='!#' onClick={() => firebase.logout()}>
								Logout
							</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.3'>Ads</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default MyNavbar;
