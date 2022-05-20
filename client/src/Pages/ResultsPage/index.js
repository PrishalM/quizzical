import React from "react";
import { Navbar, Results } from "../../components";
import { useNavigate } from "react-router-dom";
import { gameInfo, player1Sc, player2Sc } from "../../reducers/gameSlice";
import { useSelector, useDispatch } from "react-redux";

const ResultsPage = () => {
  const navigate = useNavigate();

  // get the formInfo again - get scores for player names
  const formInfo = useSelector(gameInfo);

  // player 1 and player 2 scores
  const player1Score = useSelector(player1Sc);
  const player2Score = useSelector(player2Sc);

  console.log(formInfo)

  console.log(player1Score, player2Score)

  return (
    <>
      {/* NavBar & Title */}
      <div className="page-section">
        <Navbar />
        <div className="page-container">
          <h1>Results</h1>
          <h3>Player1, pick the Loser's poison!</h3>

          {/* Results container */}
          <div id="results-container">
            {/* <img
              id="winners-crown"
              src="./images/crown.png"
              alt="Royal crown"
            /> */}
            <div id="winner-container">
              <h2>
                <strong>Winner</strong>
              </h2>
              <p className="responsive-hidden-p">Player1</p>
              <div className="points-container">
                <p className="responsive-para">Player1</p>
                <img src="./images/beer.png" alt="Pint of frothy beer" />
                <p>{player1Score} points</p>
              </div>
            </div>

            <div id="loser-container">
              <h2>
                <strong>Loser</strong>
              </h2>
              <p className="responsive-hidden-p">Player2</p>
              <div className="points-container">
                <p className="responsive-para">Player2</p>
                <img
                  src="./images/whisky.png"
                  alt="Bottle of whisky and a spilt shot glass"
                />
                <p>{player2Score} point</p>
              </div>
            </div>
          </div>

          {/* Play Again Button */}
          <div className="btn-container">
            <button
              id="restartBtn"
              className="primary-button"
              onClick={() => navigate("/settings")}
            >
              Play again
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultsPage;
