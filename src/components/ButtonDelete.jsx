/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FiDelete } from 'react-icons/fi';
import PropTypes from 'prop-types';

function ButtonDelete({ id, deleteNote }) {
  return <button className="action" type="button" title="Delete" onClick={() => deleteNote(id)}><FiDelete /></button>;
}

ButtonDelete.propTypes = {
  id: PropTypes.string.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default ButtonDelete;
