import React from "react";
import { Navbar } from "../../components";
import { useNavigate } from "react-router-dom";

const BeforeYouStartPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div id="beforeYouStart-section">
        <h1 id="beforeYouStart-heading">Before you start, ensure...</h1>

        <div id="beforeYouStart-terms">
          <p>
            <i class="fa-solid fa-martini-glass icon"></i>Everyone playing is
            over the age of 18
          </p>

          <p>
            <i class="fa-solid fa-skull-crossbones icon"></i>Everyone playing
            will drink responsibly
          </p>

          <p>
            <i class="fa-solid fa-handshake "></i>You agree to our{" "}
            <a href="">privacy</a> and <a href="">cookie policy</a>
          </p>
        </div>

        <button
          id="agree-button"
          className="primary-button"
          onClick={() => navigate("/settings")}
        >
          Agree
        </button>
      </div>
    </>
  );
};

export default BeforeYouStartPage;
