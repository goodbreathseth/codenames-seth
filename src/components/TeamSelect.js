import { db, auth } from "../services/firebase";
import { useState } from "react";
import { useHistory } from "react-router-dom"

export default function TeamSelect() {
  // Set formValues to be state data
  const [team, setTeam] = useState("");
  const [role, setRole] = useState("");
  const history = useHistory();

  const startGame = (e) => {
    e.preventDefault();

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
        }
        else {
          history.push("/player");
        }
      });
  };

  return (
    <form onSubmit={startGame} className="form text-light">
      <div className="space-between-items space-around">
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

      <div className="space-between-items space-around">
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

      <div className={"space-between-items space-around " + (team && role ? "" : "invisible")}>
        <strong>START</strong>
        <button
          type="submit"
          className="action">
          <h2>🕊️ PLAY GAME</h2>
        </button>
      </div>
    </form>
  );
}
