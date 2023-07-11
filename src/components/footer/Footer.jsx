import { navLinks } from "../../constants"
import { footerLogo, twitter, facebook } from "../../assets";
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
import footer from './Footer.module.scss';
import { IconContext } from "react-icons";

const Footer = () => {
	return (
		<footer className={footer.footer}>
			<div className={`${footer.container} container m-auto flex jc-sb ai-center`}>
				<div className={footer.links}>
					<a href="#!"><img src={footerLogo} alt="logo" /></a>
					<nav>
						<ul className="footer-links uppercase">
							{navLinks.map((link, index) => (
								<li key={`link-${index}`}><a href="#!">{link.title}</a></li>
							))}
						</ul>
					</nav>
				</div>
				<div className={footer.socials}>
					{/* <a href="#!"><img className={footer.facebook} src={facebook} alt="facebook" /></a>
					<a href="#!"><img className={footer.twitter} src={twitter} alt="twitter" /></a> */}
					<IconContext.Provider
						value={{size: "24px"}}
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
		</footer>
	)
}

export default Footer