// UserCard.js
import React from 'react';
import './UserCard';

function UserCard({ title, type, addres, city, onGreet }) {
  return (
    <div className="user-card">
      <h2>{title}</h2>
      <p>Тип: {type}</p>
      <p>Місто: {city}</p>
      <p>Адресса: {addres}</p>
      <button onClick={onGreet}>Забронювати</button>
    </div>
  );
}

export default UserCard;

