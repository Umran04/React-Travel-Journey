import React from 'react';
import kodai from './assets/kodai.jpg';
import makkah from './assets/kabah.jpg';
import london from './assets/london.jpg';

export default [
  {
    id: '1',
    title: 'Kodaikanal',
    location: 'India, Tamil Nadu',
    googleMapsUrl:
      'https://www.google.com/maps/place/Kodaikanal,+Tamil+Nadu,+India/@10.2360905,77.4571205,13z/data=!3m1!4b1!4m6!3m5!1s0x3b0766637f0a0387:0x9ffae9373758c13c!8m2!3d10.2391086!4d77.4977456!16zL20vMDUzNDZk?entry=ttu&g_ep=EgoyMDI0MDkyMi4wIKXMDSoASAFQAw%3D%3D',
    startDate: '21/09/2024',
    endDate: '22/09/2024',
    description:
      'Kodaikanal is one of the very popular holiday destination hill resorts in South India. This hill station stands 7200 feet above sea level and situated in upper palani hills of the western ghats near Madurai in Tamil Nadu. Kodaikanal is also popularly known as the princes of Hill Stations.',
    imageUrl: kodai,
  },

  {
    title: 'Makkah',
    location: 'Saudi Arabic',
    googleMapsUrl:
      'https://www.google.com/maps/place/Makkah+Saudi+Arabia/@21.4359344,39.6813922,11z/      data=!3m1!4b1!4m6!3m5!1s0x15c21b4ced818775:0x98ab2469cf70c9ce!8m2!3d21.4240968!4d39.8173364!16zL20vMDU4d3A?entry=ttu&g_ep=EgoyMDI0MDkyMi4wIKXMDSoASAFQAw%3D%3D',
    startDate: '01/07/2018',
    endDate: '16/07/2018',
    description:
      'Makkah, city, western Saudi Arabia, located in the Ṣirāt Mountains, inland from the Red Sea coast. It is the holiest of Muslim cities. Muhammad, the founder of Islam, was born in Mecca, and it is toward this religious center that Muslims turn five times daily in prayer (see qiblah).',
    imageUrl: makkah,
  },

  {
    title: 'London',
    location: 'London Eye',
    googleMapsUrl:
      'https://www.google.com/maps/place/London/@51.5281798,-0.4312316,10z/data=!3m1!4b1!4m6!3m5!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862!16zL20vMDRqcGw?entry=ttu&g_ep=EgoyMDI0MDkyMi4wIKXMDSoASAFQAw%3D%3D',
    startDate: 'My whole life',
    endDate: 'My whole life',
    description:
      'London stands on the River Thames in southeast England, at the head of a 50-mile (80 km) estuary down to the North Sea, and has been a major settlement for nearly 2,000 years. Its ancient core and financial centre, the City of London, was founded by the Romans as Londinium and has retained its medieval boundaries.',
    imageUrl: london,
  },
];
