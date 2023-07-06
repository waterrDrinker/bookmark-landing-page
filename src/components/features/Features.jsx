import { useState } from "react";
import { features } from '../../constants';
import feature from './Features.module.scss';

const Features = () => {
	const [active, setActive] = useState(0)
	console.log(active)
	return (
		<section className='container m-auto'>
			<div>
				<div className={feature.info}>
					<h2 className={feature.title}>Features</h2>
					<p className={feature.description}>
						Our aim is to make it quick and easy for you to access your favourite websites.
						Your bookmarks sync between your devices so you can access them on the go.
					</p>
				</div>
				<div className={feature.bar}>
					<div className={feature.buttons}>
						{features.map((title, index) => (
							<button key={title.name} onClick={() => {
								setActive(index);
							}}>
								{title.name}
							</button>
						))}
					</div>
					<hr />
				</div>
			</div>
			<div className="">
				<div className="">
					<img src="" alt="" />
				</div>
				<div>
					<h3>Bookmark in one click</h3>
					<p>
						Organize your bookmarks however you like. Our simple drag-and-drop interface
						gives you complete control over how you manage your favourite sites.
					</p>
					<button>More Info</button>
				</div>
			</div>
		</section>
	)
}

export default Features