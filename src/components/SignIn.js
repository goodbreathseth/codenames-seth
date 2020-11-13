import { auth, provider, db } from "../services/firebase";

export default function SignIn() {
  const signInWithGoogle = () => {
    // Authenticate user with popup
    auth.signInWithPopup(provider).then(({ user }) => {

      // Save user into database
      db.collection("users")
        .doc(user.uid)
        .set({
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        })
        .then(console.log("Successfully wrote user"))
        .catch((error) => console.log("Error writing user: ", error));
    });
  };

  return (
    <>
      <button onClick={signInWithGoogle} className="action">
        <h2>Sign in with Google</h2>
      </button>
    </>
  );
}
