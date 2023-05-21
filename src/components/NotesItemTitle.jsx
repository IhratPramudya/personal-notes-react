import React from 'react';
import PropTypes from 'prop-types';

function NotesItemTitle({ title }) {
  return (
    <h2 className="notes-item__title">
      {title}
    </h2>
  );
}

NotesItemTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NotesItemTitle;
