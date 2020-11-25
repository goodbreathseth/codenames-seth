import { db, auth } from "../services/firebase";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function TeamSelect() {
  // Set formValues to be state data
  const [team, setTeam] = useState("");
  const [role, setRole] = useState("");
  const history = useHistory();

  const startGame = (e) => {
    e.preventDefault();


    if (!auth.currentUser) {
      return
    }
    
    const { uid } = auth.currentUser;
    db.collection("users")
      .doc(uid)
      .set(
        {
          team: team,
          role: role,
        },
        { merge: true }
      )
      .then(() => {
        if (role === "spymaster") {
          history.push("/spymaster");
        } else {
          history.push("/player");
        }
      });
  };

  return (
    <form onSubmit={startGame} className="form text-light">
      <div className="space-between-items space-around animate__animated animate__fadeInUp animate__faster">
        <strong>SELECT TEAM</strong>
        <button
          type="button"
          className={"neutral " + (team === "red" ? "pressed" : "")}
          onClick={() => setTeam("red")}
        >
          <h2>RED</h2>
        </button>
        <button
          type="button"
          className={"neutral " + (team === "blue" ? "pressed" : "")}
          onClick={() => setTeam("blue")}
        >
          <h2>BLUE</h2>
        </button>
      </div>

      <div className="space-between-items space-around animate__animated animate__fadeInUp">
        <strong>SELECT ROLE</strong>
        <button
          type="button"
          className={"neutral " + (role === "spymaster" ? "pressed" : "")}
          onClick={() => setRole("spymaster")}
        >
          <h2>SPYMASTER</h2>
        </button>
        <button
          type="button"
          className={"neutral " + (role === "player" ? "pressed" : "")}
          onClick={() => setRole("player")}
        >
          <h2>PLAYER</h2>
        </button>
      </div>

      <div
        className={
          "space-between-items space-around " +
          (team && role
            ? "animate__animated animate__fadeIn animate__faster"
            : "invisible")
        }
      >
        {/* <strong>START</strong> */}
        <button
          type="submit"
          className="action animate__animated animate__pulse animate__infinite animate__slow"
        >
          <h2>🕊️ PLAY GAME</h2>
        </button>
      </div>

      {auth.currentUser && (
        <button
          className="neutral centered space-around animate__animated animate__fadeIn animate__delay-1s"
          onClick={() => auth.signOut()}
        >
          <h2>SIGN OUT</h2>
        </button>
      )}
    </form>
  );
}
