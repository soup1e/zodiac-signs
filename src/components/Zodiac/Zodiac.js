import './Zodiac.css';

export default function Zodiac({ zodiac: { name, dates } }) {
  return (
    <>
      <ul className="ZodiacCard">
        <img alt={name} src={`/cards/${name}.png`} />
        <li className="name">{name}</li>
        <li className="dates">{dates}</li>
      </ul>
    </>
  );
}
