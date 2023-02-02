import { useDispatch, useSelector } from 'react-redux';
import {addContact} from 'redux/operations';
import {selectContacts } from 'redux/selectors';
import { Form,Input,AddButton } from "./ContactForm.styled";



const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmit = contact => {
    dispatch(addContact(contact));
  };

  const handleSubmit = (values, { resetForm }) => {
    if (contacts.some(contact => contact.name === values.name)) {
      alert(`${values.name} is already in contacts`);
    } else {
      onSubmit(values);
    }

    resetForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name
        <Input
          
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          
        />
      </label>
      <label>
        Number
        <Input
          
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          
        />
      </label>
      <AddButton type="submit">Add contact</AddButton>
     
    </Form>
  );
    }


export default ContactForm;




