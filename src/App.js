import './App.css';

function App() {
  const tittle = 'Welcome to the new blog';
  const likes = 50;
  const link = "https://www.google.com"

  return (
    <div className="App">
      <div className="content">
        <h1>{ tittle }</h1>
        <p>Liked { likes } times</p>

        <a href={link}>Google site</a>
      </div>
    </div>
  );
}

export default App;
