import { useState } from 'react';
import './App.css';

function App() {
  fetch('https://eventsapi.azurewebsites.net/api/events')
    .then((res) => res.json)
    .then((data: any) => console.log(data));
  // const getdata = () => {
  //   fetch('https://eventsapi.azurewebsites.net/api/events')
  //     .then((res) => res.json)
  //     .then((data) => console.log(data));
  // };

  return <div>Hello</div>;
}

export default App;
