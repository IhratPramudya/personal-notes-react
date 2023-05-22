/* eslint-disable react/require-default-props */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getArchivedNotes } from '../utils/local-data';
import NotesList from '../components/NotesList';
import SerachBar from '../components/SearchBar';

function ArchivePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  function changeKeyword(keyword) {
    setSearchParams({ keyword });
  }

  return <ArchivePage defaultKeyword={keyword} keywordChange={changeKeyword} />;
}

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      archived: getArchivedNotes(),
      keyword: props.defaultKeyword || '',
    };

    this.onChangeKeywordHandler = this.onChangeKeywordHandler.bind(this);
  }

  onChangeKeywordHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const archived = this.state.archived.filter((archive) => {
      return archive.title.toLowerCase().includes(
        this.state.keyword.toLocaleLowerCase(),
      );
    });

    return (
      <section className="archives-page">
        <h2>Catatan Arsip</h2>
        <SerachBar keyword={this.state.keyword} keywordChange={this.onChangeKeywordHandler} />
        <NotesList notes={archived} />
      </section>
    );
  }
}

ArchivePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default ArchivePageWrapper;
