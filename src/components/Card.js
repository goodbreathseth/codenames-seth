import { useEffect } from "react";
export default function Card({ team, flipped, word, spymaster, player }) {
  useEffect(() => {
    console.log("word changed")
  }, []);

  return (
    <>
      <div
        className={
          "card animate__animated animate__faster " + (player && flipped ? "animate__flipInX " : "") +
          (!flipped && player
            ? "unflipped cursor-pointer "
            : team === "red"
            ? "red"
            : team === "blue"
            ? "blue"
            : team === "none"
            ? "none"
            : team === "assassin"
            ? "assassin"
            : "animate__flipOutY")
        }
      >
        <div
          className={
            "animate__animated" +
            (spymaster && flipped ? " animate__flash" : "")
          }
        >
          <div className="square-parent">
            {!flipped && player ? <div className="square">&#8194; </div> : null}
            {spymaster ? (
              <div className="square checkmark">
                {flipped ? <span>&#10003;</span> : <span>&#8194;</span>}
              </div>
            ) : null}
            <div>
              <i className={flipped || spymaster ? "invisible" : null}>
                {word.toUpperCase()}
              </i>
            </div>
          </div>
          <h3>{word.toUpperCase()}</h3>
        </div>
      </div>
    </>
  );
}

Card.defaultProps = {
  team: "none",
  flipped: false,
  word: "word",
};
