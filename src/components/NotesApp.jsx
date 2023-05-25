/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { FiLogOut, FiMoon, FiSun } from 'react-icons/fi';
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';
import DetailPage from '../pages/DetailPage';
import ArchivePage from '../pages/ArchivePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import { getUserLogged, putAccessToken } from '../utils/network-data';
import LocalContext from './LocalContext';

function NotesApp() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setinitializing] = React.useState(true);

  const [light, setLight] = React.useState(localStorage.getItem('mode'));
  const [locale, setLocale] = React.useState(localStorage.getItem('locale'));

  const toggleLight = () => {
    setLight((prevMode) => {
      const newLocale = prevMode === 'light' ? '' : 'light';
      localStorage.setItem('mode', newLocale);
      return prevMode === 'light' ? '' : 'light';
    });
  };

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLang = prevLocale === 'indo' ? 'eng' : 'indo';
      localStorage.setItem('locale', newLang);

      return prevLocale === 'indo' ? 'eng' : 'indo';
    });
  };

  const localeContextValue = React.useMemo(() => ({
    locale,
    toggleLocale,
  }), [locale]);

  async function onLoginSuccessHandler({ accessToken }) {
    putAccessToken(accessToken);

    const { data } = await getUserLogged();

    setAuthedUser(data);
  }

  React.useEffect(() => {
    const fetchData = async () => {
      const { data } = await getUserLogged();

      setAuthedUser(data);
      setinitializing(false);
    };

    fetchData();
  }, []);

  function onLogout() {
    setAuthedUser(null);

    putAccessToken('');
  }

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <LocalContext.Provider value={localeContextValue}>
        <div className="app-container" data-theme={light === '' ? 'light' : ''}>
          <header>
            <h1>
              {' '}
              <Link to="/">{locale === 'indo' ? 'Aplikasi Catatan' : 'notes application'}</Link>
            </h1>
            <button className="toggle-locale" onClick={toggleLocale}>Translate</button>
            <button className="toggle-theme" type="button" onClick={toggleLight}>{light === '' ? <FiMoon></FiMoon> : <FiSun></FiSun> }</button>
          </header>
          <main>
            <Routes>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccessHandler} />} />
            </Routes>
          </main>
        </div>
      </LocalContext.Provider>
    );
  }

  return (
    <LocalContext.Provider value={localeContextValue}>
      <div className="app-container" data-theme={light === '' ? 'light' : ''}>
        <header>
          <h1>
            {' '}
            <Link to="/">{locale === 'indo' ? 'Aplikasi Catatan' : 'notes application'}</Link>
          </h1>
          <Navigation />
          <button className="toggle-locale" onClick={toggleLocale}>Translate</button>
          <button className="toggle-theme" type="button" onClick={toggleLight}>{light === '' ? <FiMoon></FiMoon> : <FiSun></FiSun> }</button>
          <button className="button-logout" onClick={() => onLogout()} type="button">
            <FiLogOut></FiLogOut>
            {' '}
            {authedUser.name}
          </button>
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
    </LocalContext.Provider>
  );
}

export default NotesApp;
