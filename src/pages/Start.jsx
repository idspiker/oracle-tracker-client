import { useState } from 'react';

import AppHeader from '../components/AppHeader';
import AppBody from '../components/AppBody';

export default function Start() {
  const [password, setPassword] = useState('');

  const handleStart = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <AppHeader />
      <AppBody>
        <h2 className='center-text margin-beneath'>
          Please enter your host password
        </h2>
        <form className='form-section' onSubmit={handleStart}>
          <input
            type='password'
            className='form-input margin-above margin-beneath'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='form-btn'>START SESSION</button>
        </form>
      </AppBody>
    </div>
  );
}
