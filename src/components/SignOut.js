import { auth } from "../services/firebase";

export default function SignOut() {
    return (
      auth.currentUser && (
        <button className="neutral" onClick={() => auth.signOut()}>
          <h3>SIGN OUT</h3>
        </button>
      )
    );
}