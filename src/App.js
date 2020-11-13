import logo from "./assets/logo.png";
import "./App.css";
import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Home from "./views/Home"
import PlayerView from "./views/PlayerView"
import SpymasterView from "./views/SpymasterView"

import { useCollectionData } from 'react-firebase-hooks/firestore';

import { db } from "./services/firebase";


// db.collection('codenames').doc('game').get().then(doc => {
//   const data = doc.data();
//   console.log(data)
// })



export default function App() {

  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/player">
        <PlayerView />
      </Route>
      <Route path="/spymaster">
        <SpymasterView />
      </Route>
    </>
  );
}
