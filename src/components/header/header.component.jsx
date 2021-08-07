import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.css";

const Header = () => {
	return (
		<header>
			<h1 className="logo">
				<Link to="/">HOME</Link>
			</h1>
			<ul className="header-ul">
				<li>
					<Link className="header-item" to="/selection">
						Selection Sort
					</Link>
				</li>
				<li>
					<Link className="header-item" to="/insertion">
						Insertion Sort
					</Link>
				</li>
				<li>
					<Link className="header-item" to="/merge">
						Merge Sort
					</Link>
				</li>
				<li>
					<Link className="header-item" to="/quick">
						Quick Sort
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
