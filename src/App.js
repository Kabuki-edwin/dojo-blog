import './App.css';
import Navbar from "./Navbar";
import Home from "./Home"

function App() {
  const tittle = 'Welcome to the new blog';
  const likes = 50;
  const link = "https://www.google.com"

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
