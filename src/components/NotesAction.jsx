/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonAdd from './ButtonAdd';
import ButtonSave from './ButtonSave';

function NotesAction({ onSave }) {
  const location = useLocation();
  return (
    <div className="homepage__action">
      {
               location.pathname === '/notes/new' ? <ButtonSave onSave={onSave} /> : <ButtonAdd />
            }
    </div>
  );
}

NotesAction.propTypes = {
  onSave: PropTypes.func,
};

export default NotesAction;
