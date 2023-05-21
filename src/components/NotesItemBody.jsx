import React from 'react';
import PropTypes from 'prop-types';

function NotesItemBody({ body }) {
  return (
    <p className="note-item__body">{body}</p>
  );
}

NotesItemBody.propTypes = {
  body: PropTypes.string.isRequired,
};

export default NotesItemBody;
