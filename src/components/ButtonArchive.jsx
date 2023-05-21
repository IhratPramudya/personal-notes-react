/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FaArrowCircleDown, FaArrowAltCircleUp } from 'react-icons/fa';
// import PropTypes from 'prop-types';

function ButtonArchive({
  id, archivenote, archived, deleteArchiveNote,
}) {
  return archived === true ? <button className="action" type="button" title="sudah arsip" onClick={() => deleteArchiveNote(id)}><FaArrowAltCircleUp /></button>
    : <button className="action" type="button" title="Arsip" onClick={() => archivenote(id)}><FaArrowCircleDown /></button>;
}

// ButtonArchive.propTypes = {
//   id: PropTypes.string.isRequired,
//   archivenote: PropTypes.func.isRequired,
//   archived: PropTypes.bool.isRequired,
//   deleteArchiveNote: PropTypes.func.isRequired,
// };

export default ButtonArchive;
