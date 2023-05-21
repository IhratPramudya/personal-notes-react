/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

function SerachBar({ keyword, keywordChange }) {
  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder="Cari berdasarkan judul..."
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </section>
  );
}

SerachBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SerachBar;
