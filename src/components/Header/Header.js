import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.scss';

const Header = () => {
	const location = useLocation();
	const header = location.pathname === '/' ? 'transparent' : '';

	return (
		<div className={`header ${header}`} >
			<Link to="/" className="header__title">
				<h3>Learn Code, Teach Code</h3>
			</Link>

			<ul className="header__links">
				<li>
					<NavLink
						exact
						to="/"
						className="header__links-link"
						activeClassName="selected"
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/projects"
						className="header__links-link"
						activeClassName="selected"
					>
						Projects
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/articles"
						exact
						className="header__links-link"
						activeClassName="selected"
					>
						Articles
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Header;
