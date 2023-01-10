import React from 'react';
import './Main.css';

import { zodiac } from '../../data';
import Zodiac from '../Zodiac/Zodiac';

export default function Main() {
  return (
    <main>
      {zodiac.map((zodiac) => (
        <Zodiac key={zodiac.id} zodiac={zodiac} />
      ))}
    </main>
  );
}
