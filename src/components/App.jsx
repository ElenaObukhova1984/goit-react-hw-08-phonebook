import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { GlobalStyle } from "./GlobalStyle";
import ContactForm from "./ContactForm";
import ContactsList  from "./ContactList";
import Filter  from "./Filter";


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Loading contacts...</b>}
        <ContactsList/>
        <GlobalStyle/>
      </div>
    )
}



