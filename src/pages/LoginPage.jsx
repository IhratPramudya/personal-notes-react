/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/network-data';
import LocalContext from '../components/LocalContext';

function LoginPage({ loginSuccess }) {
  async function onLogin(user) {
    const { error, data } = await login(user);

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <LocalContext.Consumer>
      {({ locale }) => (
        <section className="login-page">
          <h2>
            {locale === 'indo' ? 'Silahkan login untuk menggunakan aplikasi' : 'Login to use app, please.'}
          </h2>
          <LoginInput login={onLogin} />
          <p>
            {locale === 'indo' ? 'Belum punya akun ?' : 'Dont have an account?'}
            <Link to="/register">
              {' '}
              {locale === 'indo' ? 'Registrasi disini' : 'Register here'}
            </Link>
          </p>
        </section>
      )}

    </LocalContext.Consumer>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
