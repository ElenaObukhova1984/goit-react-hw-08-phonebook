import { useDispatch, useSelector } from 'react-redux';
import {addContact} from 'redux/contacts/operations';
import {selectContacts } from 'redux/contacts/selectors';
import { Form,Input,AddButton } from "./ContactForm.styled";



const ContactForm = () => {
 const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

 
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;

    if (
      contacts.map(contact => contact.name).includes(form.elements.name.value)
    ) {
      alert(
        `${form.elements.name.value} is already in contacts.`
      );
    } else {
      dispatch(
        addContact({
          name: form.elements.name.value,
          number: form.elements.number.value,
        })
      );
    }

    form.reset();
  }
  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name
      </label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          
        />
      
      <label>
        Number
        </label>
        <Input
          
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          
        />
      
      <AddButton type="submit">Add contact</AddButton>
     
    </Form>
  );
    }


export default ContactForm;




