function Finished({ dispatch, highscore, maxPossiblePoints, points }) {
  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <div>
      <p className="result">
        You Scored <strong>{points}</strong> Out Of{" "}
        <strong>{maxPossiblePoints}</strong> ({Math.ceil(percentage)})%
      </p>
      <p className="highscore">Highscore {highscore} Points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default Finished;
