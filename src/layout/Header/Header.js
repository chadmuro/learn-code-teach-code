import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
	return (
		<div className="header">
			<div className="header__title">
				<h3>Learn Code, Teach Code</h3>
			</div>
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
						to="/articles" exact
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
