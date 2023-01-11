import React from "react";
import PropTypes from 'prop-types';
import { ContactList,ContactItem,DelButton,Contact } from "./ContactList.styled";


const Contacts=({ contacts, onDelete, })=> {
    return (
       
            <div>
                <ContactList >
                    {contacts.map(({ id, name, number }) => (
                        <ContactItem key={id}>
                            <Contact>{name}:</Contact>
                            <Contact>{number}</Contact>
                            <DelButton
                                type='button'
                                onClick={() => onDelete(id)}>
                                Delete
                            </DelButton>
                        </ContactItem>
                    ))}
                </ContactList >
            </div>
      
    );
};



Contacts.protoType = {
    onDelete: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
    })).isRequired
}

export default Contacts;