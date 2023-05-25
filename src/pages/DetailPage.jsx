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
} from '../utils/network-data';
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
      note: [],
    };

    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onDeleteArchivedHandler = this.onDeleteArchivedHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getNote(this.props.id);

    this.setState(() => {
      return {
        note: data,
      };
    });
  }

  async onDeleteNoteHandler(id) {
    const { error } = await deleteNote(id);

    if (!error) {
      this.props.navigate('/');
    }
  }

  async onArchiveNoteHandler(id) {
    const { error } = await archiveNote(id);

    if (!error) {
      this.props.navigate('/');
    }
  }

  async onDeleteArchivedHandler(id) {
    const { error } = await unarchiveNote(id);

    if (!error) {
      this.props.navigate('/');
    }
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
