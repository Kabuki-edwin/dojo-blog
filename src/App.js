import Navbar from "./Navbar";
import Create from "./create";
import Home from "./home";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
      <div className="content">
        <Switch>
         <Route exact path = "/">
           <Home/>
         </Route>
         <Route path = "/create">
           <Create/>
         </Route>
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;
