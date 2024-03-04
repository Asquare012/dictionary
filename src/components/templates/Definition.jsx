import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "../styles/definition.scss";
import back_arrow from "../assets/back.png";
import play from "../assets/play.webp";
// import HashLoader from "react-spinners/HashLoader";

const Definition = () => {
  const { word } = useParams();
  const [definition, setDefinition] = useState([]);
  const [exist, setExist] = useState(true);
  // const [loading, setLoading] = useState(true);

  const getDef = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((resp) => {
        if (!resp.ok) {
          setExist(false);
        }
        return resp.json();
      })
      .then((def) => {
        setDefinition(def);
        // setLoading(false);
      });
  };

  useEffect(() => getDef, []);

  if (!exist)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
          height: "100vh",
          textAlign: "center",
          fontSize: "20px",
        }}
      >
        <h3>WORD NOT FOUND</h3>
        <NavLink to={"/"}>
          <button
            style={{
              width: "37%",
              height: "37px",
              alignSelf: "center",
              marginTop: "20px",
              backgroundColor: "#15194b",
              color: "#ffffff",
              fontSize: "15px",
              border: "none",
              outline: "none",
            }}
          >
            GO HOME
          </button>
        </NavLink>
      </div>
    );

  return (
    <div className="Define">
      {/* <div className="Loader">
          <HashLoader size="80px" color={"#15194b"} loading="loading" />
        </div> */}

      <div className="Top">
        <div className="Top-Nav">
          <NavLink to={"/"}>
            <img src={back_arrow} alt="back-arrow" height="30px" />
          </NavLink>
        </div>
        <div className="Top-Info">
          <div className="Info-Word">{word}</div>
          <div className="Info-Sound">
            <img src={play} alt="play-icon" height="30px" />
          </div>
        </div>
      </div>
      <div className="Bottom">
        {definition.map((def, index) => {
          return (
            <div className="Definition-container" key={index}>
              {def.meanings.map((meaning, index) => {
                return (
                  <div className="Box" key={index}>
                    <span
                      style={{
                        fontSize: "22px",
                        color: "#736b71",
                        marginBottom: "20px",
                      }}
                    >
                      {meaning.partOfSpeech}
                    </span>
                    <ol>
                      {meaning.definitions.map((mean, index) => {
                        return (
                          <li key={index}>
                            {mean.definition}
                            <span>{mean.example && mean.example}</span>
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Definition;
