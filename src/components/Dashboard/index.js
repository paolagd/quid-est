import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
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
    if (!user) history.replace("/login");
    parseDictionary();
  }, [user, loading, error, history]);

  //Parses the latest 8 dictionary items for the user
  const parseDictionary = async () => {
    const items = await getUserDictionary(user.uid);
    const dictionaryItems = items.slice(0, 8);
    setGalleryItems(dictionaryItems);
  };

  console.log(galleryItems)
  const gallery = galleryItems.map((item, index) => {
    return <DictionaryItem key={index} imageURL={item.downloadURL} sourceWord={item.sourceWord} translatedWord={item.translatedWord} language={item.languageTo}/>;
  });

  return (
    <div id="dashboard" className="container-fluid">
      <div
        className="bg-light border border-light hero-photography jumbotron layer"
        style={{
          backgroundImage: "url('assets/img/hero-background-photography.jpg')",
        }}
      >
        <div className="hero-text">
          <h1 className="hero-title">Qued-est?</h1>
          <p className="hero-subtitle">
            Qued-est helps you find out how to say anything in any language!
          </p>
          <p className="hero-subtitle">
            You just need to upload a photo of the object and review the
            available translations!
          </p>
          <p>
            <a
              className="btn btn-primary btn-lg hero-button"
              role="button"
              href="/"
            >
              Take a photo
            </a>
          </p>
        </div>
      </div>

      <br />

      {/* Gallery */}
      <div className="container-fluid">
        <div className="px-lg-5">
          <div className="row"> {gallery}</div>
          <div className="py-5 text-right">
            <a href="#" className="btn btn-dark px-5 py-3 text-uppercase">
              Show me more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
