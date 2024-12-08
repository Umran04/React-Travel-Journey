import React from 'react';
import kodai from './assets/kodai.jpg';
import makkah from './assets/mtfuji.jpg';
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
    title: 'Mt Fuji',
    location: 'Japan',
    googleMapsUrl:
      'https://www.google.com/maps/place/Mount+Fuji/@35.3606233,138.7067638,14z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D',
    startDate: '01/07/2018',
    endDate: '16/07/2018',
    description:
      'Japan’s Mt. Fuji is an active volcano about 100 kilometers southwest of Tokyo. Commonly called “Fuji-san,” it’s the country’s tallest peak, at 3,776 meters. A pilgrimage site for centuries, it’s considered one of Japan’s 3 sacred mountains, and summit hikes remain a popular activity. ',
    imageUrl: makkah,
  },

  {
    title: 'London',
    location: 'London Eye',
    googleMapsUrl:
      'https://www.google.com/maps/place/London/@51.5281798,-0.4312316,10z/data=!3m1!4b1!4m6!3m5!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862!16zL20vMDRqcGw?entry=ttu&g_ep=EgoyMDI0MDkyMi4wIKXMDSoASAFQAw%3D%3D',
    startDate: '05/01/2006',
    endDate: '10/12/2024',
    description:
      'London stands on the River Thames in southeast England, at the head of a 50-mile (80 km) estuary down to the North Sea, and has been a major settlement for nearly 2,000 years. Its ancient core and financial centre, the City of London, was founded by the Romans as Londinium and has retained its medieval boundaries.',
    imageUrl: london,
  },
];
