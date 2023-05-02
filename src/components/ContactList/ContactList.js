import { PropTypes } from 'prop-types';
import { ListWrap, ButtonWrap } from './ContactList.styled';


export const ContactList = ({ contacts, onDelete }) => {
  
  return (
    <ListWrap>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <ButtonWrap type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </ButtonWrap>
        </li>
      ))}
    </ListWrap>
  );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
          }).isRequired),
    onDelete:PropTypes.func.isRequired,
};