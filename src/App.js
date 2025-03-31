import UserCard from "./components/UserCard";

// App.js
import React from 'react';

const users = [
  { name: "Андрій", age: 25, city: "Київ" },
  { name: "Ольга", age: 30, city: "Львів" },
  { name: "Максим", age: 22, city: "Одеса" }
];

function App() {
  const handleGreet = (name) => {
    alert(`Привіт, ${name}!`);
  };

  return (
    <div>
      {users.map((user, index) => (
        <UserCard
          key={index}
          {...user}
          onGreet={() => handleGreet(user.name)}
        />
      ))}
    </div>
  );
}

export default App;