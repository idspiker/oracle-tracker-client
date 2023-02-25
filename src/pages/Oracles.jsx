import { useState, useEffect } from 'react';
import io from 'socket.io-client';

import AppHeader from '../components/AppHeader';
import AppBody from '../components/AppBody';
import TemplarOracles from '../components/TemplarOracles';

const socket = io.connect('http://localhost:5002');

export default function Oracles() {
  const [socketData, setSocketData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [selectedView, setSelectedView] = useState('templar');

  const activateOracle = (oracleName, encounter) => {
    socket.emit('update', {
      oracleName,
      encounter,
      timestamp: new Date().getTime(),
    });
  };

  const clearCycle = (encounter) => {
    socket.emit('clear-cycle', { encounter });
  };

  useEffect(() => {
    socket.on('oracle-configuration', (data) => {
      setSocketData(data);
      setLoading(false);
    });
  }, [socket]);

  return (
    <>
      <AppHeader />
      <AppBody>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <div>
              <button
                onClick={() => setSelectedView('templar')}
                className='view-btn'
              >
                Templar
              </button>
              <button
                onClick={() => setSelectedView('atheon')}
                className='view-btn'
              >
                Atheon
              </button>
            </div>
            <div>
              {selectedView === 'templar' ? (
                <TemplarOracles
                  oracles={socketData.templar.oracles}
                  activateOracle={activateOracle}
                  clearCycle={clearCycle}
                />
              ) : selectedView === 'atheon' ? (
                <div>atheon</div>
              ) : null}
            </div>
          </div>
        )}
      </AppBody>
    </>
  );
}
