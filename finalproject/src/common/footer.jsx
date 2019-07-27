import React, { Component } from 'react';
import logo from '../logo.svg'

const Footer = () => {
	return (
		<div className="footer">
			<footer className="d-flex">
				<img className="app-logo" src={logo}></img>
				<div className="v-center">
					<div>Built with love using ReactJS</div>
					<div>© 2018 Copyright: The Hateful 8</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
