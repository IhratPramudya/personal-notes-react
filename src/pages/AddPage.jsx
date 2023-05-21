/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NotesAdd from '../components/NotesAdd';
import { addNote } from '../utils/local-data';

function AddPage() {
  const navigation = useNavigate();
  function addNotesHandler(notes) {
    addNote(notes);

    navigation('/');
  }
  return (
    <section className="add-new-page">
      <NotesAdd addNotes={addNotesHandler} />
    </section>
  );
}

export default AddPage;
