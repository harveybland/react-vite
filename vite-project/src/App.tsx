import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('');

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data: any) => {
      console.log(data);
      // setTitle(data[0].title);

      return (
        <div>
          {data.map((item: any) => {
            return <span>{item.title}</span>;
          })}
        </div>
      );
    });
}

export default App;
