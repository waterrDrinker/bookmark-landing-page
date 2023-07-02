import { navLinks } from '../../constants'

const Header = () => {
	return (
		<header>
			<div className="">
				<img src="" alt="" />
			</div>
			<div className="">
				<nav>
					{navLinks.map((link, index) => (
						<li key={`link-${index}`}>{link.title}</li>
					))}
				</nav>
				<a href="#!">Login</a>
			</div>
		</header>
	)
}

export default Header