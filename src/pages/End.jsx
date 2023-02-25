import { useState } from 'react';

import AppHeader from '../components/AppHeader';
import AppBody from '../components/AppBody';

export default function End() {
  const [password, setPassword] = useState('');

  const handleEnd = async (e) => {
    e.preventDefault();

    const response = await window.fetch(
      'http://localhost:5001/host/end-session',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Mode: 'cors',
          Accept: 'application/json',
          Cache: 'no-cache',
        },
        body: JSON.stringify({ password }),
      }
    );

    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <AppHeader />
      <AppBody>
        <h2 className='center-text margin-beneath'>
          Please enter your host password
        </h2>
        <form className='form-section' onSubmit={handleEnd}>
          <input
            type='password'
            className='form-input margin-above margin-beneath'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='form-btn'>END SESSION</button>
        </form>
      </AppBody>
    </div>
  );
}
