import React from 'react';

import {
	Navbar,
	Nav,
	Icon
} from 'rsuite';

function Navigation() {
	return (
		<>
			<Navbar style={{paddingLeft: 30}}>
				<Navbar.Header style = {
					{
						paddingRight: 20
					}
				} >
					<h2>SoccerBallOnline</h2>
				</Navbar.Header>
				<Navbar.Body>
				<Nav>
					<Nav.Item href="/" icon={<Icon icon="home" />} >Accueil</Nav.Item>
					<Nav.Item href="/contact">Contact</Nav.Item>
				</Nav>
				</Navbar.Body>
			</Navbar>
		</>
	)
}

export default Navigation;