import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NotesItemTitle from './NotesItemTitle';
import NotesItemDate from './NotesItemDate';
import NotesItemBody from './NotesItemBody';

function NotesItem({
  id, title, createdAt, body,
}) {
  return (
    <div className="note-item">
      <Link to={`/notes/${id}`}><NotesItemTitle title={title} /></Link>
      <NotesItemDate createdAt={createdAt} />
      <NotesItemBody body={body} />
    </div>
  );
}

NotesItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NotesItem;
