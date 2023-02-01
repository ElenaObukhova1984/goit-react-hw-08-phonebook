import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/filterSlice';
import ContactItem from 'components/ContactItem';
import { List, Item } from './ContactList.styled';

//----Получаем подходящие контакты----
function getVisibleContacts(contacts, filter) {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
}

 const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  //----Рендер----
  return  (
    <List>
      {visibleContacts.map(contact => (
        <Item key={contact.id}>
          <ContactItem contact={contact} />
        </Item>
      ))}
    </List>
  ) 

};


export default ContactsList;