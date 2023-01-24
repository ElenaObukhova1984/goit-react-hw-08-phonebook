import { useState,useEffect} from "react";
import { GlobalStyle } from "./GlobalStyle";


import ContactForm from "./ContactForm";
import Contacts from "./ContactList";
import Filter from "./Filter";

const CONTACTS = 'contacts'

const lSContacts = localStorage.getItem(CONTACTS);
const parseContacts = JSON.parse(lSContacts);

export function App() {
  const [contacts, setContacts] = useState(
    parseContacts || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(CONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  const formHandleSubmit = data => {
    if (contacts.find(
        ({ name }) => data.name.toLowerCase() === name.toLowerCase())
    ) {
      return alert(`${data.name} is already in contacts`);
    }
    setContacts(prev => [...prev, data]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };
  const addFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(normalizedFilter)
    );
  };
  const visibleContacts = addFilterContacts();

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formHandleSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <Contacts contacts={visibleContacts}
            onDelete={deleteContact}
            />
        
        <GlobalStyle/>
      </div>
    )

}


