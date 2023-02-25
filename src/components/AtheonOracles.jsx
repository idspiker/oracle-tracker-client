import { useState } from 'react';

import Oracle from './Oracle';

export default function AtheonOracles({
  oracles,
  planet,
  activateOracle,
  clearCycle,
  changePlanet,
}) {
  return (
    <div>
      <div>
        <button
          onClick={() => {
            clearCycle('atheon');
          }}
          className='btn-primary'
        >
          CLEAR CYCLE
        </button>
      </div>
      <div>
        <div style={{ position: 'absolute', top: '40%', left: '20vw' }}>
          <Oracle
            oracle={oracles.oracle1}
            oracleName={'oracle1'}
            encounter={'atheon'}
            activateOracle={activateOracle}
          />
        </div>
        <div style={{ position: 'absolute', top: '40%', left: '45vw' }}>
          <Oracle
            oracle={oracles.oracle2}
            oracleName={'oracle2'}
            encounter={'atheon'}
            activateOracle={activateOracle}
          />
        </div>
        <div style={{ position: 'absolute', top: '40%', left: '70vw' }}>
          <Oracle
            oracle={oracles.oracle3}
            oracleName={'oracle3'}
            encounter={'atheon'}
            activateOracle={activateOracle}
          />
        </div>
        <div style={{ position: 'absolute', top: '55%', left: '20vw' }}>
          <Oracle
            oracle={oracles.oracle4}
            oracleName={'oracle4'}
            encounter={'atheon'}
            activateOracle={activateOracle}
          />
        </div>
        <div style={{ position: 'absolute', top: '55%', left: '45vw' }}>
          <Oracle
            oracle={oracles.oracle5}
            oracleName={'oracle5'}
            encounter={'atheon'}
            activateOracle={activateOracle}
          />
        </div>
        <div style={{ position: 'absolute', top: '55%', left: '70vw' }}>
          <Oracle
            oracle={oracles.oracle6}
            oracleName={'oracle6'}
            encounter={'atheon'}
            activateOracle={activateOracle}
          />
        </div>
      </div>
      <div className='portal-guide'>
        {planet === 'venus'
          ? 'OPEN RIGHT PORTAL'
          : planet === 'mars'
          ? 'OPEN LEFT PORTAL'
          : null}
      </div>
      <div className='planet-selection'>
        <button
          className='planet-select-btn venus-btn'
          onClick={() => changePlanet('venus')}
        >
          Venus
        </button>
        <button
          className='planet-select-btn mars-btn'
          onClick={() => changePlanet('mars')}
        >
          Mars
        </button>
      </div>
      <div
        className={
          planet === 'venus'
            ? 'planet-background venus-background'
            : planet === 'mars'
            ? 'planet-background mars-background'
            : ''
        }
      />
    </div>
  );
}
