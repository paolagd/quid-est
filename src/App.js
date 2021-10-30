import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from 'react';
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
import { auth, getUserData, logout } from "./utils/firebase";
import Dictionary from './components/Dictionary/Dictionary';
import AlternateDictionary from './components/AlternateDictionary/AlternateDictionary';

function App() {
  const [user] = useAuthState(auth);
  const [language, setLanguage] = useState('es');

  const logoutUser = () => {
    logout();
  };

  useEffect(() => {
    async function loadData() { 
      if (user) {
        const userData = await getUserData(user.uid);
        console.log(`userData`, userData);
        if (userData?.language) {
          setLanguage(userData.language);
        } else {
          setLanguage('es');
        }
      }
    }
    loadData();
  }, [user])

  useEffect(() => {
    console.log(`language`, language);
  }, [language]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset" component={Reset} />

          <Route path="/">

            <div id="wrapper">

              <SideBar language={language} />
              <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                  <TopBar user={user} logout={logoutUser} language={language} setLanguage={setLanguage} />

                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/image" component={MainImage} />
                  <Route exact path="/quiz" component={Quiz} />
                  <Route exact path="/newsearch"> <NewPhotoOptions language={language} /> </Route>
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
