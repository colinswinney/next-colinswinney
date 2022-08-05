import { useForm, ValidationError } from "@formspree/react";
import {
	FormEl,
	Legend,
	Input,
	Label,
	TextArea,
	SubmitWrap,
	SubmitButton,
} from "./styles/form";

const Form = () => {
	const [state, handleSubmit] = useForm("mzbjezon");
	if (state.succeeded) {
		return <p>Thank you, I will be in touch as soon as possible!</p>;
	}
	return (
		<FormEl onSubmit={handleSubmit}>
			<Legend>
				Email me at{" "}
				<a href="mailto:colinjswinney@gmail.com?subject=Hi Colin!">
					colinjswinney@gmail.com
				</a>
				<br />
				or send a message below!
			</Legend>

			<Label>
				<span className="sr-only"></span>
				<Input id="name" type="name" name="name" placeholder="Name" />
			</Label>

			<ValidationError prefix="name" field="name" errors={state.errors} />

			<Label>
				<span className="sr-only">Email</span>
				<Input id="email" type="email" name="email" placeholder="Email" />
			</Label>

			<ValidationError
				prefix="Email"
				field="email"
				errors={state.errors}
			/>

			<Label>
				<span className="sr-only">Phone</span>
				<Input id="phone" type="tel" name="phone" placeholder="Phone" />
			</Label>

			<ValidationError
				prefix="phone"
				field="phone"
				errors={state.errors}
			/>

			<Label>
				<span className="sr-only">Company</span>
				<Input id="company" type="text" name="company" placeholder="Company"/>
			</Label>

			<ValidationError
				prefix="company"
				field="company"
				errors={state.errors}
			/>

			<Label htmlFor="message">Message</Label>

			<TextArea id="message" name="message" />

			<ValidationError
				prefix="Message"
				field="message"
				errors={state.errors}
			/>

			<SubmitWrap>
				<SubmitButton type="submit" disabled={state.submitting}>
					<span>Submit</span>
				</SubmitButton>
			</SubmitWrap>
		</FormEl>
	);
};

export default Form;
