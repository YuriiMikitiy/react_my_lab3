// UserCard.js
import React from 'react';
import './UserCard';

function UserCard({ name, age, city, onGreet }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Вік: {age}</p>
      <p>Місто: {city}</p>
      <button onClick={onGreet}>Показати вітання</button>
    </div>
  );
}

export default UserCard;