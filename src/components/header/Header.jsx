import { useState } from "react";
import { navLinks } from '../../constants'
import { logo, logoReversed } from '../../assets';
import header from './Header.module.scss';
import menu from './Menu.module.scss';

const Header = () => {
	const [active, setActive] = useState('');
	const [toggle, setToggle] = useState(false)

	return (
		<header className={`flex container m-auto ${header.header}`}>
			<div className={header.logo}>
				<a href="#!"><img src={toggle ? logo : logoReversed} alt="bookmark-logo" /></a>
			</div>
			<div className={`${header.navbar} flex ai-center uppercase`}>
				<nav>
					<ul className={`flex header-links ${header.links}`}>
						{navLinks.map((link, index) => (
							<li key={`link-${index}`}><a href='#!'>{link.title}</a></li>
						))}
					</ul>
				</nav>
				<a href="#!" className='red-btn'>Login</a>
			</div>
			<div className={menu.burger}>
				<div className={toggle ? `${menu['menu-button-open']}` : `${menu['menu-button']}`}
					onClick={() => setToggle(!toggle)}>
					<span className={menu['menu-button-line']}></span>
					<span className={menu['menu-button-line']}></span>
					<span className={menu['menu-button-line']}></span>
				</div>
				<div className={toggle ? `${menu.mobile}` : 'none'}>
					<div className={menu.menu}>
						<div>
							<nav className={menu["mobile-nav"]}>
								<ul>
									{navLinks.map((link, index) => (
										<li key={`link-${index}`}><a href='#!'>{link.title}</a></li>
									))}
								</ul>
							</nav>
							<a href="#!" className={menu['login-btn']}>Login</a>
						</div>
						<div className="flex">
							<a href="!#"><i className="facebook-icon"></i></a>
							<a href="!#"><i className="twitter-icon"></i></a>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header