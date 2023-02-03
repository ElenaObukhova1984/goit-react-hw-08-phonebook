
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Button } from './ContactItem.styled';

const ContactItem = ({ contact }) => {
const { name, phone } = contact;
const dispatch = useDispatch();

const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <p>{name}: {phone}</p>
        <Button type='button' onClick={handleDelete}>
        Delete
      </Button>
    </>
  );
};



export default ContactItem;