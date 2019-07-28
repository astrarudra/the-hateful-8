import React, { Component } from 'react';
import logo from '../assets/logo.png'

const NavBar = ({setStore}) => {
	return (
		<div className="nav-header aligner">
			<div onClick={() => setStore({ pageSelected: 'home' })}>
				<img src={logo} height="50"></img>
			</div>
		</div>
	);
};

export default NavBar;
