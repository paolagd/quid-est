import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, getUserDictionary } from "../../utils/firebase";

import "./Dashboard.css";
import DictionaryItem from "./DictionaryItem";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [galleryItems, setGalleryItems] = useState([]);
  const history = useHistory();
 
  useEffect(() => {
    if (loading) return;
    if (error) console.log(error);
    if (!user){
      history.replace("/login");
    }else{ 
      parseDictionary();
    } 
  }, [user, loading, error, history]);

  //Parses the latest 8 dictionary items for the user
  const parseDictionary = async () => {
    const items = await getUserDictionary(user.uid);
    const dictionaryItems = items.slice(0, 8);
    setGalleryItems(dictionaryItems);
  };
 
  const gallery = galleryItems.map((item, index) => {
    return <DictionaryItem key={index} imageURL={item.downloadURL} sourceWord={item.sourceWord} translatedWord={item.translatedWord} language={item.languageTo}/>;
  });

  return (
    <div id="dashboard" className="container-fluid">
      <div
        className="bg-light border border-light hero-photography jumbotron layer"
        style={{
          backgroundImage: "url('assets/img/hero-background-photography3.jpg')",
        }}
      >
        <div className="hero-text">
          <h1 className="hero-title">What am I looking at?</h1>
          <p className="hero-subtitle">
            Found a cool thing but you don't know how to call it?
          </p>
          <p className="hero-subtitle">
            Let us do the work for you.
          </p>
          <p>
            <a
              className="btn btn-primary btn-lg hero-button"
              role="button"
              href="/"
            >
              Take a picture
            </a>
          </p>
        </div>
      </div>

      <br />

      {/* Gallery */}
      <div className="container-fluid">
        <div className="px-lg-5">
          <div className="row"> {gallery}</div>
          <div className="text-right">
            <Link to="/myDictionary" className="btn btn-dark px-5 py-3 text-uppercase">
              Go to Dictionary
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
