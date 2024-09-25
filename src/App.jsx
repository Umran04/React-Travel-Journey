import React from 'react';
import Header from './components/Header';
import TravelLog from './components/TravelLog';
import data from './data.js';

export default function App() {
  const log = data.map((item) => {
    return <TravelLog key={item.id} {...item} />;
  });

  return (
    <div className="app">
      <Header />
      {log}
    </div>
  );
}

//{travelLog}
