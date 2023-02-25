import { useNavigate } from 'react-router-dom';

import AppBody from '../components/AppBody';
import AppHeader from '../components/AppHeader';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <AppHeader />
      <AppBody>
        <h2 className='center-text'>Welcome to Oracle Tracker!</h2>
        <p className='center-text margin-beneath'>
          Please join or start a new session below.
        </p>
        <button onClick={() => navigate('/join')} className='btn-primary'>
          JOIN SESSION
        </button>
        <button
          onClick={() => navigate('/start')}
          className='btn-primary dark-background margin-beneath'
        >
          START SESSION
        </button>
        <div className='filter-background text-section margin-above'>
          <h2>About</h2>
          <p className='spaced'>
            Oracle Tracker exists to help fireteams who are directionaly
            challenged or uncoordinated complete the vault of glass raid by
            aiding their ability to communicate oracle sequences.
          </p>
          <p className='spaced'>
            This tool was created by one such player in hopes that it would help
            his fireteam finally reach their goal and bring revenge on the vault
            for all of the suffering it has caused them.
          </p>
        </div>
      </AppBody>
    </div>
  );
}
