import React from "react";

function Results({ score }) {
  return (
    <div className="results">
      Your score is {score}
      <br />
      Press F5 to Play Again
    </div>
  );
}

export default Results;
