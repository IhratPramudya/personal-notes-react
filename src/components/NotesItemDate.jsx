import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils';

function NotesItemDate({ createdAt }) {
  return <p>{ showFormattedDate(createdAt)}</p>;
}

NotesItemDate.propTypes = {
  createdAt: PropTypes.string.isRequired,
};

export default NotesItemDate;
