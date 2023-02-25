import { useState, useEffect } from 'react';

import AppHeader from '../components/AppHeader';
import AppBody from '../components/AppBody';
import TemplarOracles from '../components/TemplarOracles';
import AtheonOracles from '../components/AtheonOracles';
import connectToServer from '../connectToServer';

const socket = connectToServer();

export default function Oracles() {
  const [socketData, setSocketData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [selectedView, setSelectedView] = useState('templar');

  const activateOracle = (oracleName, encounter) => {
    socket.emit('activate-oracle', {
      oracleName,
      encounter,
      timestamp: new Date().getTime(),
    });
  };

  const clearCycle = (encounter) => {
    socket.emit('clear-cycle', { encounter });
  };

  const changePlanet = (planet) => {
    socket.emit('change-planet', { planet });
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
                className={
                  selectedView === 'templar'
                    ? 'view-btn view-btn-selected'
                    : 'view-btn'
                }
              >
                Templar
              </button>
              <button
                onClick={() => setSelectedView('atheon')}
                className={
                  selectedView === 'atheon'
                    ? 'view-btn view-btn-selected'
                    : 'view-btn'
                }
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
                <AtheonOracles
                  oracles={socketData.atheon.oracles}
                  planet={socketData.atheon.planet}
                  activateOracle={activateOracle}
                  clearCycle={clearCycle}
                  changePlanet={changePlanet}
                />
              ) : null}
            </div>
          </div>
        )}
      </AppBody>
    </>
  );
}
