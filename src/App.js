import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Reset from './components/Reset';
import Dashboard from './components/Dashboard';
import './utils/firebase';
import MainImage from './components/MainImage';
import NewPhotoOptions from './components/NewPhotoOptions';
import PhotoResults from './components/PhotoResults';

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
          <Route exact path="/newsearch" component={NewPhotoOptions} />
          <Route exact path="/results" component={PhotoResults} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
