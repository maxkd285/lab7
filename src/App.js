import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App</h1>
        <section>
          <p>
            This took me so long to set up. I should have read the instructions better.
          </p>
        </section>

        <section>
          <h2>These are some websites I was using to rather than doing the lab.</h2>
          <ul>
            <li>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </li>
            <li>
              <a href="https://www.miniclip.com" target="_blank" rel="noopener noreferrer">
                Miniclip
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2>Mistakes I made:</h2>
          <ul>
            <li>Not reading the assingment</li>
            <li>Mixing up gitlab and github</li>
            <li>Giving up</li>
          </ul>
        </section>

        <footer>
          <p>&copy; 2024 Max's React App</p>
        </footer>
      </header>
    </div>
  );
}

export default App;
