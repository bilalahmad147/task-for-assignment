import React from 'react';
import { emailData } from './components/data/emails'
import ResponsiveDrawer from './components/Navbar/NavBar'

function App() {
  return (
    <div>
      <ResponsiveDrawer />
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
