import { questions } from "../../constants";

const Faq = () => {
	return (
		<section>
			<div className="">
				<h3>Frequently Asked Questions</h3>
				<p>
					Here are some of our FAQs. If you have any other questions you’d like
					answered please feel free to email us.
				</p>
				<div className="">
					<ul>
						{questions.map((q) => (
							<li key={q.title}>{q.title}</li>
						))}
					</ul>
					<a href="">More Info</a>
				</div>
			</div>
		</section>
	)
}

export default Faq