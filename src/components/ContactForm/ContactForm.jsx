import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { Form,Input,AddButton } from "./ContactForm.styled";
import PropTypes from 'prop-types';



export default class ContactForm extends Component {
    nameId = nanoid();
    numberId = nanoid();
    
    state = {
        name: '',
        number: ''
    }
    
    handleChange = (event) => {
        const { name, value } = event.currentTarget;
        this.setState({
            [name]: value
        })
    };

    reset = () => {
        this.setState({
        name: '',
        number: ''
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();

    }



    render() {
        const { name, number } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameId}>Name</label>
                <Input onChange={this.handleChange}
                    type="text"
                    name="name"
                    value={name}
                    id ={this.nameId}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <label htmlFor={this.numberId}>Number</label>
                <Input onChange={this.handleChange}
                    type="tel"
                    name="number"
                    value={number}
                    id ={this.numberId}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                
                <AddButton type="submit">Add contact</AddButton>
            </Form>
        )
    }


}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  
};
