import { useState } from 'react';
import { error } from '../../assets';
import contact from './Contact.module.scss';

const Contact = () => {
	const [value, setValue] = useState('');
	const [invalid, setInvalid] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault();
		const regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		if (value.match(regexp)) {
			setValue('');
			setInvalid(false)
		} else {
			setInvalid(true)	
		}
	}

	return (
		<section className={contact.section}>
			<div className={contact.header}>
				<p>35,000+ already joined</p>
				<h2>Stay up-to-date with what we’re doing</h2>
			</div>
			<form className={contact.form}
			onSubmit={handleSubmit}
			noValidate
			>
				<div className={contact.input}>
					<input type="email" name="email" id="email" 
					placeholder='Enter your email address'
					className={invalid ? contact.invalid : undefined} value={value} 
					onChange={(e) => setValue(e.target.value)}
					/>
					<div 
					className={contact.error + " " + (invalid ? 
					contact.invalid : undefined)}
					>
						Whoops, make sure it's an email
					</div>
					<img src={error} alt="error-sign"
					style={invalid 
					? {display: "block"}
					: {display: "none"}
					}
					/>
				</div>
				<button type="submit" className={`${contact.btn} btn`}>Contact Us</button>
			</form>
		</section>
	)
}

export default Contact