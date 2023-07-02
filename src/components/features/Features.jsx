import { features } from '../../constants';

const Features = () => {
	return (
		<section>
			<h2>Features</h2>
			<p>
				Our aim is to make it quick and easy for you to access your favourite websites.
				Your bookmarks sync between your devices so you can access them on the go.
			</p>
			<div className="">
				{features.map((title) => (
					<button key={title.name}>{title.name}</button>
				))}
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