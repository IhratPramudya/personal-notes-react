/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import SerachBar from '../components/SearchBar';
import { getActiveNotes } from '../utils/network-data';
import NotesList from '../components/NotesList';
import NotesAction from '../components/NotesAction';
import LocalContext from '../components/LocalContext';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      keyword: props.defaultKeyword || '',
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getActiveNotes();

    this.setState(() => {
      return {
        notes: data,
      };
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(
        this.state.keyword.toLocaleLowerCase(),
      );
    });

    return (
      <LocalContext.Consumer>
        {({ locale }) => (
          <section className="homepage">
            <h2>{locale === 'indo' ? 'Catatan Aktif' : 'active note'}</h2>
            <SerachBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
            <NotesList notes={notes.filter((note) => note.archived === false)} />
            <NotesAction />
          </section>
        )}

      </LocalContext.Consumer>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
