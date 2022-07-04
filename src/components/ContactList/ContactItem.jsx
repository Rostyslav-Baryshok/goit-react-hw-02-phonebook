import PropTypes from 'prop-types';
import { Item } from './ContactItem.styled';

export const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <Item>
      <p>{name}</p>
      <p>{number}</p>
      <button
        type="button"
        id={id}
        onClick={e => {
          onDelete(e.target.id);
        }}
      >
        Delete
      </button>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};
