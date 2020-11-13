import { auth, provider } from "../services/firebase"

export default function SignIn() {
  const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
  }
  return (
    <>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  );
}
