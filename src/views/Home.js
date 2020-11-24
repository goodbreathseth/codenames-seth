import logo from "../assets/logo.png";
import SignIn from "../components/SignIn"
import SignOut from "../components/SignOut"
import TeamSelect from "../components/TeamSelect"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase"
import {useState} from "react"



export default function Home() {
  const [user] = useAuthState(auth);

  const [showAnimation, toggleAnimation] = useState(true)


  return (
    <div className="home fullscreen padding">
      <img
        src={logo}
        alt="Game title"
        className={"logo animate__animated" + (showAnimation ? " animate__rubberBand" : "")}
        onClick={() => {
          toggleAnimation(false);
          setTimeout(() => {
            toggleAnimation(true);
          }, 100);
        }}
      />
      {user ? <TeamSelect /> : <SignIn />}
      {user ? <SignOut /> : null}
    </div>
  );
};
