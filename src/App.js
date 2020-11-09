import React from 'react';
import { emailData } from './data/emails'

function App() {
  return (
    <div>
      <h1>list of data</h1>
      {
        emailData.map((ind, key) => {
          return (
            <div key={ind.id}>
              <ul>
                <li>{ind.name}</li>
                <li>{ind.username}</li>
                <li>{ind.website}</li>
              </ul>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
