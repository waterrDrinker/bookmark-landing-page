import { browsers } from "../../constants"

const ExtensionCard = ({ browser }) => {
	return (
		<div className="">
			<div className="flex flex-col">
				<div className="">
					<img src="" alt="" />
					<h3>{browser.title}</h3>
					<p>{browser.version}</p>
				</div>
				<a href="#!">Add & Install Extension</a>
			</div>
		</div>
	)
}

const Extension = () => {
	return (
		<section>
			<div className="">
				<h2>Download the extension</h2>
				<p>
					We’ve got more browsers in the pipeline. Please do let us know if you’ve
					got a favourite you’d like us to prioritize.
				</p>
			</div>
			<div className="flex">
				{browsers.map((browser, index) => (
					<ExtensionCard browser={browser} key={`extension-${index}`} />)
				)}
			</div>
		</section>
	)
}

export default Extension