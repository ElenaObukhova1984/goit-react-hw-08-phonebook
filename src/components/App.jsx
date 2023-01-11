import React, { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { nanoid } from 'nanoid';

import ContactForm from "./ContactForm";
import Contacts from "./ContactList";
import Filter from "./Filter";



export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }

  componentDidMount() {
    try {
      const savedContacts = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(savedContacts);
      if (parsedContacts) {
        this.setState({ contacts: parsedContacts });
      };
    
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
    };
  };
  
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };


  formHandleSubmit = ({ name, number }) => {
    const addContact = {
      id: nanoid(),
      name,
      number,
    };

    const getContacts = this.state.contacts.map(contact => contact.name);

    if (getContacts.includes(name)) {
      return alert(`${name} is already in contacts`);
    }
  
  
    this.setState(({ contacts }) => ({
      contacts: [addContact, ...contacts]
    }));
    
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getVisibleContacts = () => {
    const {contacts, filter} = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  changeFilter = (event) => {
    this.setState({
      filter: event.currentTarget.value
    });
  };



  render() {
    const {filter} = this.state; 
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formHandleSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <Contacts contacts={visibleContacts}
            onDelete={this.deleteContact}
            />
        
        <GlobalStyle/>
      </div>
    )
  }


}