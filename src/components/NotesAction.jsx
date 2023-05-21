/* eslint-disable react/prop-types */
import React from 'react';
import { useLocation } from 'react-router-dom';
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

export default NotesAction;
