import logo from "../assets/logo.png";
import SignIn from "../components/SignIn"
import SignOut from "../components/SignOut"
import TeamSelect from "../components/TeamSelect"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase"



export default function Home() {
  const [user] = useAuthState(auth);

  return (
    <div className="home fullscreen padding">
      <img src={logo} alt="Game title" className="logo" />
      { user ? <TeamSelect /> : <SignIn />}
      { user? <SignOut /> : null}
    </div>
  );
};
