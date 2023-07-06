import hero from './Hero.module.scss';
import { heroImg } from '../../assets'

const Hero = () => {
	return (
		<section className={`${hero.hero} container`}>
			<div className={hero.container}>
				<div className="flex flex-col">
					<div className={hero.content}>
						<h1 className={hero.title}>A Simple Bookmark Manager</h1>
						<p>
							A clean and simple interface to organize your favourite websites. Open a new
							browser tab and see your sites load instantly. Try it for free.
						</p>
						<div className="">
							<a href="#!" className='btn default-btn'>Get it on Chrome</a>
							<a href="#!" className='btn'>Get it on Firefox</a>
						</div>
					</div>
				</div>
				<div className={hero.image}>
					<img src={heroImg} alt="app-image" />
					<div className='figure'></div>
				</div>
			</div>
		</section>
	)
}

export default Hero