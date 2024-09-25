import React from 'react';
import world from '../assets/world.png';

export default function Header() {
  return (
    <div className="header">
      <img src={world} className="header--logo" />
      <h4>My travel journey</h4>
    </div>
  );
}
