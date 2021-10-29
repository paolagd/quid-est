import './App.css'; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Reset from './components/Reset';
import Dashboard from './components/Dashboard/'; 
import MainImage from './components/MainImage';
import Quiz from './components/Quiz';
import NewPhotoOptions from './components/NewPhotoOptions';
import PhotoResults from './components/PhotoResults'; 
import SideBar from './components/SideBar/';
import TopBar from './components/TopBar'; 
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "./utils/firebase";   
import Dictionary from './components/Dictionary/Dictionary';
import AlternateDictionary from './components/AlternateDictionary/AlternateDictionary';

function App() {
  const [user, loading, error] = useAuthState(auth); 

  const logoutUser = () => {
    logout();
  };
 
  return (
    <div className="App">   
      <Router> 
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset" component={Reset} />

          <Route path="/"> 

            <div id="wrapper">
              <SideBar/> 
              <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                  <TopBar user={user} logout={logoutUser} />

                  <Route exact path="/" component={Dashboard} /> 
                  <Route exact path="/image" component={MainImage} />
                  <Route exact path="/quiz" component={Quiz} />
                  <Route exact path="/newsearch" component={NewPhotoOptions} />
                  <Route exact path="/results" component={PhotoResults} /> 
                  <Route exact path="/mydictionary" component={Dictionary} /> 
                  <Route exact path="/mydictionary2" component={AlternateDictionary} /> 
                </div>
              </div> 
            </div>
          </Route> 
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
