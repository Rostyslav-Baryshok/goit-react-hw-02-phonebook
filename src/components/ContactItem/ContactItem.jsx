import PropTypes from 'prop-types';
import { Container } from './ContactItem.styled';

export const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <li>
      <Container>
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
      </Container>
    </li>
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
