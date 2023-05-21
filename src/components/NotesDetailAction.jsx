/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import ButtonArchive from './ButtonArchive';
import ButtonDelete from './ButtonDelete';

function NotesDetailAction({
  id, deleteNote, archivenote, archived, deleteArchiveNote,
}) {
  return (
    <div className="detail-page__action">
      <ButtonArchive id={id} archivenote={archivenote} archived={archived} deleteArchiveNote={deleteArchiveNote} />
      <ButtonDelete id={id} deleteNote={deleteNote} />
    </div>
  );
}

NotesDetailAction.propTypes = {
  id: PropTypes.string.isRequired,
  deleteNote: PropTypes.func.isRequired,
  archivenote: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
  deleteArchiveNote: PropTypes.func.isRequired,
};

export default NotesDetailAction;
