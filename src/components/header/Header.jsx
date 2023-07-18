import { useState } from "react";
import { navLinks } from '../../constants'
import { headerLogo, logoWhite } from '../../assets';
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';
import { IconContext } from "react-icons";
import header from './Header.module.scss';
import menu from './Menu.module.scss';

const Header = () => {
	const [toggle, setToggle] = useState(false)

	if (toggle) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'initial';
	}

	return (
		<header className={`flex container m-auto ${header.header}`}>
			<div className={header.logo}>
				<a href="#!"><img src={headerLogo} alt="bookmark-logo"
					style={toggle ? { display: 'none' } : {}}
				/></a>
			</div>
			<div className={`${header.navbar} flex ai-center uppercase`}>
				<nav>
					<ul className={`flex header-links ${header.links}`}>
						{navLinks.map((link, index) => (
							<li key={`link-${index}`}><a href='#!' className="link">{link.title}</a></li>
						))}
					</ul>
				</nav>
				<a href="#!" className='btn red-btn'>Login</a>
			</div>
			<div className={menu.burger}
				onClick={() => setToggle(!toggle)}
			>
				<div className={menu['menu-button']}>
					<div className={toggle ? menu.open : undefined}
					/>
				</div>
				<div className={menu.mobile + " " +
					(toggle ? menu.open : menu.hidden)
				}>
					<div className={menu.menu}>
						<img src={logoWhite} alt="logo" />
						<div>
							<div className={menu["mobile-nav"]}>
								<nav className={menu.links}>
									<ul>
										{navLinks.map((link, index) => (
											<li key={`link-${index}`}>
											<a href='#!'>{link.title}</a>
											</li>
										))}
									</ul>
								</nav>
								<a href="#!" className={menu['login-btn']}>Login</a>
							</div>
							<div className='socials'>
								<IconContext.Provider
									value={{ size: "24px" }}
								>
									<a href="https://www.facebook.com/">
										<AiFillFacebook />
									</a>
									<a href="https://twitter.com/">
										<AiOutlineTwitter />
									</a>
								</IconContext.Provider>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header