/* eslint-disable react/sort-comp */
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
import { getArchivedNotes } from '../utils/network-data';
import NotesList from '../components/NotesList';
import SerachBar from '../components/SearchBar';
import LocalContext from '../components/LocalContext';

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
      archived: [],
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

  async componentDidMount() {
    const { data } = await getArchivedNotes();

    this.setState(() => {
      return {
        archived: data,
      };
    });
  }

  render() {
    const archived = this.state.archived.filter((archive) => {
      return archive.title.toLowerCase().includes(
        this.state.keyword.toLocaleLowerCase(),
      );
    });

    return (
      <LocalContext.Consumer>
        {({ locale }) => (
          <section className="archives-page">
            <h2>
              {' '}
              {locale === 'indo' ? 'Catatan Arsip' : 'Archived Record'}
            </h2>
            <SerachBar keyword={this.state.keyword} keywordChange={this.onChangeKeywordHandler} />
            <NotesList notes={archived} />
          </section>
        )}

      </LocalContext.Consumer>
    );
  }
}

ArchivePage.propTypes = {
  defaultKeyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default ArchivePageWrapper;
