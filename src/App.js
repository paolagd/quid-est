import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Reset from './components/Reset';
import Dashboard from './components/Dashboard';
import './utils/firebase';
import MainImage from './components/MainImage';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/image" component={MainImage} />
          <Route exact path="/quiz" component={Quiz} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
