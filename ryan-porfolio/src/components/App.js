import '../css/App.css';
import {NavBar} from './Navigation/NavBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <NavBar />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Butthole
        </a>
      </header>
    </div>
  );
}

export default App;
