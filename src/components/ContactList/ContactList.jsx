import { useSelector } from 'react-redux';
import {selectContacts,
  selectFilter,
  selectVisibleContacts,
} from 'redux/contacts/selectors.js';
import ContactItem from 'components/ContactItem';
import { List, Item } from './ContactList.styled';


 const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts = useSelector(selectVisibleContacts);

  return  (
    <List>
      {filter
        ? visibleContacts.map(contact => (
            <Item key={contact.id}>
              <ContactItem contact={contact} />
            </Item>
          ))
        : contacts.map(contact => (
            <Item key={contact.id}>
              <ContactItem contact={contact} />
            </Item>
          ))}
    </List>
  ) 

};


export default ContactsList;