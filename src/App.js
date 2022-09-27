import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  return (
    <>
      <main>
        <section className='container'>
          <List people={people}></List>
          <button
            className='oldB'
            onClick={() => {
              setPeople([]);
            }}
          >
            Clear All
          </button>
          <button
            className='oldB'
            onClick={() => {
              setPeople(data);
            }}
          >
            Restore All
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
