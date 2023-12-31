import { useState } from "react";
import { features } from '../../constants';
import feature from './Features.module.scss';

const Features = () => {
	const [active, setActive] = useState(0)

	return (
		<section 
		className={`${feature.section} container m-auto`}
		>
			<div className={feature.main}>
				<div className={feature.about}>
					<h2 className={feature.title}>Features</h2>
					<p className={`${feature.description} text`}>
						Our aim is to make it quick and easy for you to access your favourite websites.
						Your bookmarks sync between your devices so you can access them on the go.
					</p>
				</div>
				<div className={feature.bar}>
					<div className={feature.buttons}>
						{features.map((title, index) => (
							<div
							className={feature['btn-wrapper']}
							key={title.id}>
							{/*  */}
								<div className={feature.btn}> 
									<button
									// className={feature[`btn-${index + 1}`]}
									onClick={() => {
										setActive(index);
									}}
									>
										{title.name}
									</button>
									<hr className={
										index === active ? feature.active : undefined
									} />
								</div>
							</div>
						))}
						<hr style={{marginLeft: `${active * 100}%`}} />
						<div className={feature['sub-border']}></div>
					</div>
				</div>
			</div>
			<div>
				<div className={feature.content}>
					<div className={feature.image}>
						<img src={features[active].img} alt="feature-image" />
						<div className={`figure ${feature.figure}`}></div>
					</div>
					<div className={feature.info}>
						<h3 className={feature.title}>{features[active].title}</h3>
						<p className={`${feature.text} text`}>{features[active].desc}</p>
						<a href="#!" className="default-btn btn">More Info</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Features