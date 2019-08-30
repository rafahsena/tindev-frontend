import React, { useState } from 'react';

import logo from '../assets/logo.svg';
import './Login.css';

import api from '../services/api';

export default function Login({ history }) {

  const [username, setUsername] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      username,
    });

    console.log(response.data);
    const { _id } = response.data;

    history.push(`/devs/${_id}`);
  }

  return(
    <div className="login-container">
      <form onSubmit={handleSubmit} method="get">
        <img src={logo} alt="Tindev" />
        <input type="text"
          value={username}
          placeholder="Digite seu usuário no GitHub"
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}