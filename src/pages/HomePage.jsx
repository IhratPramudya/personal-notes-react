/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import SerachBar from '../components/SearchBar';
import { getAllNotes } from '../utils/local-data';
import NotesList from '../components/NotesList';
import NotesAction from '../components/NotesAction';

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
      notes: getAllNotes(),
      keyword: props.defaultKeyword || '',
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
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
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        <SerachBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
        <NotesList notes={notes.filter((note) => note.archived === false)} />
        <NotesAction />
      </section>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
