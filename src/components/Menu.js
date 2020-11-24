import { useHistory } from "react-router-dom";
import { useState } from "react";
import { db } from "../services/firebase"

export default function Menu() {
  const history = useHistory();

  const [expanded, setExpanded] = useState(false);

  const back = () => {
    history.push("/");
  };

  const resetGame = () => {
    let dictionary;
    let words;
    
    // Get dictionary of words
    db.collection('codenames').doc('game').get().then(function (doc) {
      if (doc.exists) {
        dictionary = doc.data().dictionary;

        // Create new of array of 25 random words from dictionary
        let n = 25;
        let result = new Array(n),
          len = dictionary.length,
          taken = new Array(len);
        while (n--) {
          let x = Math.floor(Math.random() * len);
          result[n] = { word: dictionary[x in taken ? taken[x] : x] };
          taken[x] = --len in taken ? taken[len] : len;
        }

        // Set the other values
        words = result;
        let numOfBlues = Math.floor(Math.random() * (10 - 8) + 8);
        for (let i = 0; i < words.length; i++) {
          words[i].flipped = false;

          if (i < numOfBlues) {
            words[i].team = "blue"
          } else if (i < 17) {
            words[i].team = "red"
          } else if (i < 24) {
            words[i].team = "none"
          } else {
            words[i].team = "assassin"
          }
        }

        // Shuffle it a few times
        words.sort(() => Math.random() - 0.5);
        words.sort(() => Math.random() - 0.5);

        // Write new set of 25 words to db
        db.collection("codenames")
          .doc("game")
          .set({
            words: words,
          }, { merge: true})
          .catch(function (error) {
            console.log("error", error);
          });
      } else {
        console.log("no doc")
      }
    }).catch(function (error) {
      console.log("error", error)
    })
  };

  
  return (
    <div className={"menu " + (expanded ? "expanded" : "")}>
      <button className="neutral space-around" onClick={back}>
        <h3>&#8249; Back</h3>
      </button>
      <button className="action space-around" onClick={resetGame}>
        <h3>&#8635;&#8194;Reset game</h3>
      </button>
      <button className="expand-menu text-light" onClick={() => setExpanded(!expanded)}>
        <h2>&#9776;</h2>
      </button>
    </div>
  );
}
