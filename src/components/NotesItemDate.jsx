import React from 'react';
import PropTypes from 'prop-types';

function NotesItemDate({ createdAt }) {
  <p>{createdAt}</p>;
}

NotesItemDate.propTypes = {
  createdAt: PropTypes.string.isRequired,
};

export default NotesItemDate;
