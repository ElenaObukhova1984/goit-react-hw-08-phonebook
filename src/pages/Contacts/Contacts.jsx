import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  ContactList  from 'components/ContactList';
import  ContactForm  from 'components/ContactForm';
import  Filter  from 'components/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import { Text } from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />
      <Text>{isLoading && 'Request in progress...'}</Text>
      <ContactList />
    </>
  );
}