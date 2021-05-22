import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <h1>Hi this is Application</h1>
      <BrowserRouter>
      <Switch>
        <Route path="/dashboard"><Dashboard/></Route>
        <Route path="/preferences"><Preferences/></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
