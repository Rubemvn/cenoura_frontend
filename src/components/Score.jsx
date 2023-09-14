import { useState, useEffect } from "react";
import "./componentsStyles/Score.css";

const fetchData = async () => {
  const response = await fetch("https://cenoura-backend.onrender.com/votes");
  const data = await response.json()
  return data;
};

const Score = () => {
  const [votes, setVotes] = useState("");

  useEffect(() => {
    // A chamada da função `fetchData()` é movida para fora da função `Score()`
    const fetchDataAsync = async () => {
      const data = await fetchData();
      setVotes(data);
    };

    fetchDataAsync();
  }, []);


  return (
    <div className="score">
      <div className="madalena">
        <h1>MADALENA</h1>
        <p className="votes">{votes.madalena}</p>
      </div>

      <div className="x"><h1>X</h1></div>

      <div className="zeroPapo">
        <p className="votes">{votes.zero_papo}</p>
        <h1>ZERO-PAPO</h1></div>
    </div>
  );
};

export default Score;