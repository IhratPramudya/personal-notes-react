/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';
import LocalContext from '../components/LocalContext';

function RegisterPage() {
  const navigate = useNavigate();

  async function submitEventHandler(user) {
    const { error } = await register(user);

    if (!error) {
      alert('Yeah Kamu Berhasil Registrasi');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }

  return (
    <LocalContext.Consumer>
      {({ locale }) => (
        <section className="register-page">
          <h2>{locale === 'indo' ? 'Isi untuk mendaftar sebagai user' : 'Fill in to register as a user'}</h2>
          <RegisterInput register={submitEventHandler} />
          <p>
            {locale === 'indo' ? 'Sudah memiliki akun ?' : 'Alredy have an account?'}

            <Link to="/">{locale === 'indo' ? 'Login disini' : 'Login here'}</Link>
          </p>
        </section>
      )}

    </LocalContext.Consumer>
  );
}

export default RegisterPage;
