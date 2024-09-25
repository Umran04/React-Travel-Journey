import React from 'react';
import mapLogo from '../assets/mapsLogo.png';
import kodai from '../assets/kodai.jpg';

export default function TravelLog(props) {
  return (
    <div className="location">
      <img src={props.imageUrl} className="location--image" />

      <div className="location--facts">
        <div className="location--logo">
          <img src={mapLogo} />
          <p className="location--exact">
            {props.location}{' '}
            <a
              href={props.googleMapsUrl}
              target="_blank"
              className="location--link"
            >
              View on google maps
            </a>
          </p>
        </div>
        <h1 className="location--name">{props.title}</h1>
        <h6 className="location--date">
          {props.startDate} to {props.endDate}
        </h6>
        <p className="location--description"> {props.description} </p>
      </div>
    </div>
  );
}
