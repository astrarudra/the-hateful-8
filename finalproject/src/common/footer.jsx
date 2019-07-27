import React, { Component } from 'react';

const Footer = () => {
	return (
		<div class="container">
			<footer>
				<ul class="list-unstyled list-inline text-center">
					<li class="list-inline-item">
						<a class="btn-floating btn-fb mx-1">
							<i class="fa fa-facebook-square" aria-hidden="true" />
						</a>
					</li>
					<li class="list-inline-item">
						<a class="btn-floating btn-tw mx-1">
							<i class="fa fa-twitter-square" aria-hidden="true" />
						</a>
					</li>
					<li class="list-inline-item">
						<a class="btn-floating btn-gplus mx-1">
							<i class="fa fa-google-plus-square" aria-hidden="true" />
						</a>
					</li>
					<li class="list-inline-item">
						<a class="btn-floating btn-li mx-1">
							<i class="fa fa-linkedin-square" aria-hidden="true" />
						</a>
					</li>
					<li class="list-inline-item">
						<a class="btn-floating btn-dribbble mx-1">
							<i class="fa fa-dribbble" aria-hidden="true" />
						</a>
					</li>
				</ul>
				<div class="footer-copyright text-center py-3">© 2018 Copyright: The Hateful 8</div>
			</footer>
			{/* <footer class="footer">
				<div class="container">
					<span class="text-muted" />
				</div>
			</footer> */}
		</div>
	);
};

export default Footer;
