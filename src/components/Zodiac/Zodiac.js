import './Zodiac.css';

export default function Zodiac({ zodiac: { name, dates, symbol } }) {
  return (
    <>
      <ul className="zodiacCard">
        <li className="name">{name}</li>
        <li className="dates">{dates}</li>
        <li className="symbol">{symbol}</li>
      </ul>
    </>
  );
}
