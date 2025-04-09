import UserCard from "./components/UserCard";

// App.js
import React from 'react';

const bookingFilds = [
  { title: "Карпати", type: "Tennis", addres: "вул. Декабристів 45а", city: "Івано-Франківськ" },
  { title: "НАУКА СПОРТ ", type: "Futboll Fild", addres: "бульвар Академіка Вернадського 32", city: "Київ" },
  { title: "MSA", type: "Tennis", addres: "вул. Хмельницького 51а ", city: "Івано-Франківськ" },
  { title: "GYMMAXX", type: "Futboll Fild", addres: "вул. Драгомирова, 9А", city: "Київ" }
];

function App() {
  const handleGreet = (name) => {
    alert(`Заброньовано, ${name}!`);
  };

  return (
    <div>
      {bookingFilds.map((bookingFild, index) => (
        <UserCard
          key={index}
          {...bookingFild}
          onGreet={() => handleGreet(bookingFild.title)}
        />
      ))}
    </div>
  );
}

export default App;