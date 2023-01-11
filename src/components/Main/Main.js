import React from 'react';
import './Main.css';

import { zodiac } from '../../data';
import Zodiac from '../Zodiac/Zodiac';

export default function Main() {
  return (
    <main
      style={{
        backgroundImage: 'url(./background.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {zodiac.map((zodiac) => (
        <Zodiac key={zodiac.id} zodiac={zodiac} />
      ))}
    </main>
  );
}
