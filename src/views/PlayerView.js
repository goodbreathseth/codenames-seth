import Card from "../components/Card";
import Menu from "../components/Menu";
import { db } from "../services/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function PlayerView() {
  const [game, loading] = useCollectionData(db.collection("codenames"));

  // Update the db when a card is tapped
  const update = (index) => {
    let words = game[0].words;
    if (words[index].flipped !== "flipped") {
      words[index].flipped = "flipped";

      db.collection("codenames").doc("game").set(
        {
          words: words,
        },
        { merge: true }
      );
    }
  };

  return (
    <>
      <div className="player-view-container">
        <Menu />
        <div className="player-view">
          {loading && <h1>Loading...</h1>}
          {game &&
            game[0].words.map((word, index) => (
              <div key={index} onClick={() => update(index)}>
                <Card
                  word={word.word}
                  flipped={word.flipped}
                  team={word.team}
                  player={true}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
