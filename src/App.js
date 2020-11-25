import "./App.css";
import { Route } from "react-router-dom";
import Home from "./views/Home"
import PlayerView from "./views/PlayerView"
import SpymasterView from "./views/SpymasterView"
import "animate.css";


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
