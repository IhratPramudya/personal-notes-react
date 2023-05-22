/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  deleteNote, getNote, archiveNote, unarchiveNote,
} from '../utils/local-data';
import NotesDetailAction from '../components/NotesDetailAction';
import { showFormattedDate } from '../utils';

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  return <DetailPage id={id} navigate={navigate} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };

    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onDeleteArchivedHandler = this.onDeleteArchivedHandler.bind(this);
  }

  onDeleteNoteHandler(id) {
    deleteNote(id);

    this.props.navigate('/');
  }

  onArchiveNoteHandler(id) {
    archiveNote(id);

    this.props.navigate('/');
  }

  onDeleteArchivedHandler(id) {
    unarchiveNote(id);

    this.props.navigate('/');
  }

  render() {
    return (
      <section>
        <h3 className="detail-page__title">{this.state.note.title}</h3>
        <p className="detail-page__createdAt">{showFormattedDate(this.state.note.createdAt)}</p>
        <div className="detail-page__body">
          {this.state.note.body}
        </div>
        <NotesDetailAction
          id={this.state.note.id}
          deleteNote={this.onDeleteNoteHandler}
          archivenote={this.onArchiveNoteHandler}
          archived={this.state.note.archived}
          deleteArchiveNote={this.onDeleteArchivedHandler}
        />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
