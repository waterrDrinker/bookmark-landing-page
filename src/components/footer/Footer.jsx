import { navLinks } from "../../constants"

const Footer = () => {
	return (
		<footer>
			<div>
				<img src="" alt="" />
				{navLinks.map((link, index) => (
					<li key={`link-${index}`}>{link.title}</li>
				))}
			</div>
			<div>
				<i><a href="#!"></a></i>
				<i><a href="#!"></a></i>
			</div>
		</footer>
	)
}

export default Footer