import Card from "../components/Card";
import Menu from "../components/Menu";
import { db } from "../services/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function SpymasterView() {
  const [game, loading] = useCollectionData(db.collection("codenames"));

  return (
    <div className="spymaster-view-container">
      <Menu />
      <div className="player-view">
        {loading && <h1>Loading...</h1>}
        {game &&
          game[0].words.map((word, index) => (
            <div key={index}>
              <Card word={word.word} flipped={word.flipped} team={word.team} spymaster={true} />
            </div>
          ))}
      </div>
    </div>
  );
}
