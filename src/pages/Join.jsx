import { useState } from 'react';

import AppHeader from '../components/AppHeader';
import AppBody from '../components/AppBody';

export default function Join() {
  const [joinCode, setJoinCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('join-code', joinCode.trim());

    return (window.location.href = '/session/oracles');
  };

  return (
    <div>
      <AppHeader />
      <AppBody>
        <h2 className='center-text margin-beneath'>
          Please enter your join code
        </h2>
        <form onSubmit={handleSubmit} className='form-section'>
          <input
            type='text'
            value={joinCode}
            onChange={(e) => setJoinCode(e.target.value)}
            className='form-input margin-above margin-beneath'
          ></input>
          <button className='form-btn'>JOIN</button>
        </form>
      </AppBody>
    </div>
  );
}
