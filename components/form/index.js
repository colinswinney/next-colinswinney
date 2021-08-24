import { useForm, ValidationError } from '@formspree/react'
import { Form, Legend, Input, Label, TextArea, SubmitButton } from './styles/form'

const ContactForm = () => {

  const [state, handleSubmit] = useForm("mzbjezon");
  if (state.succeeded) {
      return <p>Thank you, I will be in touch as soon as possible!</p>;
  }
  return (
    <Form onSubmit={handleSubmit}>
        
        <Legend>Email me at <a href="mailto:colinjswinney@gmail.com?subject=Hi Colin!">colinjswinney@gmail.com</a><br/>or send a message below!</Legend>

        {/* <label htmlFor="name">
        Name
        </label> */}

        <Input
        id="name"
        type="name" 
        name="name"
        placeholder="Name"
        />


        <ValidationError 
        prefix="name" 
        field="name"
        errors={state.errors}
        />

        {/* <label htmlFor="email">
        Email
        </label> */}

        <Input
        id="email"
        type="email" 
        name="email"
        placeholder="Email"
        />


        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        />

        {/* <label htmlFor="phone">
        Phone
        </label> */}

        <Input
        id="phone"
        type="tel" 
        name="phone"
        placeholder="Phone"
        />


        <ValidationError 
        prefix="phone" 
        field="phone"
        errors={state.errors}
        />

        <Label htmlFor="message">
        Message
        </Label>

        <TextArea
        id="message"
        name="message"
        />
        

        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
        />

        <SubmitButton type="submit" disabled={state.submitting}>
        <span>Submit</span>
        </SubmitButton>
    </Form>
  );
}

export default ContactForm;
