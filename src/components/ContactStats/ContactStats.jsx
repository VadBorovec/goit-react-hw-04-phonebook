import PropTypes from 'prop-types';
import { Box, Text } from './ContactStats.styled';

export const ContactStats = ({ totalContactCount }) => (
  <Box>
    <Text>Total contacts: {totalContactCount}</Text>
  </Box>
);

ContactStats.propTypes = {
  totalContactCount: PropTypes.number.isRequired,
};
