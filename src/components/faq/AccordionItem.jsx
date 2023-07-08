import { useRef, useState, useEffect } from 'react';
import { arrow } from '../../assets';
import accordion from './AccordionItem.module.scss';

const AccordionItem = ({ q }) => {
	const [clicked, setClicked] = useState(false);
	const [height, setHeight] = useState(0)
	const contentEl = useRef();

	const { question, answer } = q;

	useEffect(() => {
		setHeight(contentEl.current.scrollHeight);
		const handleWindowResize = () => {
			setHeight(contentEl.current.scrollHeight);
		}

		window.addEventListener('resize', handleWindowResize);
		return () => {
			window.addEventListener('resize', handleWindowResize);
		}
	}, [])

	const handleToggle = () => {
		setClicked((prev) => !prev)
	}
	
	return (
		<li className={accordion.item + " " + (clicked ? accordion.active : "")}>
			<button className={accordion.btn} onClick={handleToggle}>
				{question}
				<img 
				src={arrow}
				alt='expand-arrow'
				className={accordion['btn-icon'] + " " + (clicked ? accordion.active : "")} 
				/>
			</button>
			<div 
			ref={contentEl}
			className={accordion['answer-wrapper']}
			style={
				clicked 
				? { height: `${height}px`}
				: { height: '0px' }
			}
			>
				<p className={accordion.answer}>{answer}</p>
			</div>
		</li>
	)
}

export default AccordionItem