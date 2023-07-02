import { navLinks } from '../../constants'

const Header = () => {
	return (
		<header>
			<div className="">
				<img src="" alt="" />
			</div>
			<div className="">
				<nav>
					<ul>
						{navLinks.map((link, index) => (
							<li key={`link-${index}`}><a href='#!'>{link.title}</a></li>
						))}
					</ul>
				</nav>
				<a href="#!">Login</a>
			</div>
		</header>
	)
}

export default Header