import { useRef, useState, useEffect } from 'react';
import { arrow } from '../../assets';
import accordion from './AccordionItem.module.scss';

const AccordionItem = ({ q, isClicked, index, onToggle }) => {
	// const [clicked, setClicked] = useState(false);
	const [height, setHeight] = useState(0)
	const contentEl = useRef();
	const textEl = useRef();
	const { question, answer } = q;

	useEffect(() => {
		setHeight(textEl.current.scrollHeight);
		const handleWindowResize = () => {
			setHeight(textEl.current.scrollHeight);
		}
		window.addEventListener('resize', handleWindowResize);
		return () => {
			window.addEventListener('resize', handleWindowResize);
		}
	}, [])
	
	return (
		<li className={accordion.item + " " + (isClicked ? accordion.active : "")}>
			<button className={accordion.btn} onClick={() => onToggle(index)}>
				{question}
				<img 
				src={arrow}
				alt='expand-arrow'
				className={accordion['btn-icon'] + " " + (isClicked ? accordion.active : "")} 
				/>
			</button>
			<div 
			ref={contentEl}
			className={accordion['answer-wrapper']}
			style={
				isClicked 
				? { height: `${height}px`}
				: { height: '0px' }
			}
			>
				<p 
				className={accordion.answer}
				ref={textEl}
				>{answer}</p>
			</div>
		</li>
	)
}

export default AccordionItem