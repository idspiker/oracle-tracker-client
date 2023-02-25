import Oracle from './Oracle';

export default function TemplarOracles({
  oracles,
  activateOracle,
  clearCycle,
}) {
  return (
    <div>
      <div>
        <button
          onClick={() => {
            clearCycle('templar');
          }}
          className='btn-primary'
        >
          CLEAR CYCLE
        </button>
      </div>
      <div>
        <div style={{ position: 'absolute', top: '35%', left: '25vw' }}>
          <Oracle
            oracle={oracles.oracle1}
            oracleName={'oracle1'}
            encounter={'templar'}
            activateOracle={activateOracle}
          />
        </div>
        <div style={{ position: 'absolute', top: '35%', left: '65vw' }}>
          <Oracle
            oracle={oracles.oracle2}
            oracleName={'oracle2'}
            encounter={'templar'}
            activateOracle={activateOracle}
          />
        </div>
        <div style={{ position: 'absolute', top: '50%', left: '85vw' }}>
          <Oracle
            oracle={oracles.oracle3}
            oracleName={'oracle3'}
            encounter={'templar'}
            activateOracle={activateOracle}
          />
        </div>
        <div style={{ position: 'absolute', top: '65%', left: '75vw' }}>
          <Oracle
            oracle={oracles.oracle4}
            oracleName={'oracle4'}
            encounter={'templar'}
            activateOracle={activateOracle}
          />
        </div>
        <div style={{ position: 'absolute', top: '70%', left: '45vw' }}>
          <Oracle
            oracle={oracles.oracle5}
            oracleName={'oracle5'}
            encounter={'templar'}
            activateOracle={activateOracle}
          />
        </div>
        <div style={{ position: 'absolute', top: '75%', left: '15vw' }}>
          <Oracle
            oracle={oracles.oracle6}
            oracleName={'oracle6'}
            encounter={'templar'}
            activateOracle={activateOracle}
          />
        </div>
        <div style={{ position: 'absolute', top: '65%', left: '5vw' }}>
          <Oracle
            oracle={oracles.oracle7}
            oracleName={'oracle7'}
            encounter={'templar'}
            activateOracle={activateOracle}
          />
        </div>
      </div>
    </div>
  );
}
