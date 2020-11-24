import { auth } from "../services/firebase";

export default function SignOut() {
    return (
      auth.currentUser && (
        <button className="neutral space-around" onClick={() => auth.signOut()}>
          <h2>SIGN OUT</h2>
        </button>
      )
    );
}