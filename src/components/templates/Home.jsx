import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.scss";
import hero_icon from "../assets/hero.png";

const Home = () => {
  const [word, setWord] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/definition/${word}`);
  };

  return (
    <div className="Home">
      <img src={hero_icon} alt="hero_icon" height="220px" width="220px" />
      <h1>Dictionary</h1>
      <h3>Meaning of words at your fingertip</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoFocus
          name="text"
          placeholder="Enter word"
          onChange={(e) =>
            setWord(
              e.target.value
                .toLocaleLowerCase()
                .trim()
                .replace(/[^a-z]/gi, "")
            )
          }
        />
      </form>
    </div>
  );
};

export default Home;
