import React from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ContactList,ContactItem,DelButton,Contact } from "./ContactList.styled";


export default function Contacts ({ contacts, onDelete }) {
    return (
                <ContactList>
            {contacts.map(({ id, name, number }) => (
                        <ContactItem key={nanoid()}>
                            <Contact>{name}:</Contact>
                            <Contact>{number}</Contact>
                            <DelButton
                                type='button'
                                onClick={() => onDelete(id)}>
                                Delete
                            </DelButton>
                        </ContactItem>
                    ))}
                </ContactList>
            
      
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

