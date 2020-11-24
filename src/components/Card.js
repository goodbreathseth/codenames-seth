export default function Card({ team, flipped, word }) {
  return (
    <>
      <div
        className={
          "card " +
          (!flipped
            ? "unflipped"
            : team === "red"
            ? "red"
            : team === "blue"
            ? "blue"
            : team === "none"
            ? "none"
            : "assassin")
        }
      >
        <div>
          <div className="square-parent">
            {!flipped ? <div className="square">&#8194; </div> : null}
            <div>
              <i className={flipped ? "invisible" : null}>
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
