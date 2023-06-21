import PropTypes from 'prop-types';
import { Button } from 'components/ui';
import { List, Item, Name, Number } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <Name>{name}</Name>
        <Number>{number}</Number>
        <Button onClick={() => onDeleteContact(id)}>Delete</Button>
      </Item>
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
