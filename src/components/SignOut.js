import { auth } from "../services/firebase";

export default function SignOut() {
    return (
      auth.currentUser && (
        <button
          className="neutral space-around animate__animated animate__fadeIn animate__delay-1s"
          onClick={() => auth.signOut()}
        >
          <h2>SIGN OUT</h2>
        </button>
      )
    );
}