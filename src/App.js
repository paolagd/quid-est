import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Reset from './Reset';
import Dashboard from './Dashboard';
import './firebase';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset" component={Reset} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
