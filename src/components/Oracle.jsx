export default function Oracle({
  oracle,
  oracleName,
  encounter,
  activateOracle,
}) {
  const handleClick = async () => {
    activateOracle(oracleName, encounter);
  };

  return (
    <div
      onClick={handleClick}
      className={oracle.on ? 'oracle activated' : 'oracle'}
    >
      {oracle.num !== 0 ? oracle.num : ''}
    </div>
  );
}
