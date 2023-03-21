import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [sandwiches, setSandwiches] = useState([]);

  useEffect(() => {
    getSandwiches();
  }, [])

  async function getSandwiches() {
    const fetchedSandwiches = await axios.get('/sandwiches')
    setSandwiches(fetchedSandwiches.data);
  }

  return (
    <div className="App">
      {
        sandwiches.map((sandwich) => {
          return (
            <div>
              <h1>{sandwich.img_url}</h1>
              <h1>{sandwich.name}</h1>
              <p>{sandwich.desc}</p>
              <p>{sandwich.likes} people liked this sandwich</p>
              <p>{sandwich.prep_time} mins</p>
              <p>{sandwich.default_serving} serving(s)</p>
              <p>{sandwich.calories} calories</p>
              <button>👍</button>
              <button>Delete</button>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
