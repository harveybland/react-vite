import { useState } from 'react';
import './App.css';

function App() {
  const [user, setuser] = useState('');

  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data: any) => {
      console.log(data);
      setuser(data[0].name);
    });

  return <div>User : {user}</div>;
}

export default App;
