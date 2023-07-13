import { browsers } from "../../constants"
import extension from './Extension.module.scss'

const ExtensionCard = ({ browser, index }) => {
	return (
		<div
			className={extension.card + " " + extension[`card-${index + 1}`]}
		>
			<div className={`${extension['card-content']} flex flex-col ai-center`}>
				<div className={extension['card-image']}>
					<img src={browser.icon} alt="" />
				</div>
				<h4>{browser.title}</h4>
				<p>{browser.version}</p>
			</div>
			<div className={`flex jc-center ai-center ${extension['card-btn']}`}><a href="#!" className="btn default-btn">Add & Install Extension</a></div>
		</div>
	)
}

const Extension = () => {
	return (
		<section className={`${extension.extension} m-auto`}>
			<div className="container m-auto">
				<div className={extension.header}>
					<h2 className={extension.title}>Download the extension</h2>
					<p className={`${extension.text} text`}>
						We’ve got more browsers in the pipeline. Please do let us know if you’ve
						got a favourite you’d like us to prioritize.
					</p>
				</div>
				<div className={`flex jc-center ${extension.cards}`}>
					{browsers.map((browser, index) => (
						<ExtensionCard browser={browser} key={`extension-${index}`} index={index} />)
					)}
				</div>
			</div>
		</section>
	)
}

export default Extension