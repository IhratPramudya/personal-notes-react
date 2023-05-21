import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';
import DetailPage from '../pages/DetailPage';
import ArchivePage from '../pages/ArchivePage';

function NotesApp() {
  return (
    <div className="app-container">
      <header>
        <h1>
          {' '}
          <Link to="/">Aplikasi Catatan</Link>
        </h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/new" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/archives" element={<ArchivePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default NotesApp;
