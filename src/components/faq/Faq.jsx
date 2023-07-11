import { useState } from "react";
import { questions } from "../../constants";
import AccordionItem from "./AccordionItem";
import faq from './Faq.module.scss';

const Faq = () => {
	const [expandedAccordionItem, setExpandedAccordionItem] = useState(Array(questions.length).fill(false))

	const handleToggle = (index) => {
		const nextList = expandedAccordionItem.map((item, i) => {
			if (i === index) {
				return !item
			} else {
				return item;
			}
		})
		setExpandedAccordionItem(nextList);
	}

	return (
		<section className={faq.section}>
			<div className={faq.container}>
				<div className={faq.header}>
					<h3>Frequently Asked Questions</h3>
					<p>
						Here are some of our FAQs. If you have any other questions you’d like
						answered please feel free to email us.
					</p>
				</div>
				<ul className={faq.faq}>
					{questions.map((q, index) => (
						<AccordionItem
							key={index}
							q={q}
							isClicked={expandedAccordionItem[index]}
							index={index}
							onToggle={handleToggle}
						/>
					))}
				</ul>
				<a href="#!" className="btn default-btn">More info</a>
			</div>
		</section>
	)
}

export default Faq