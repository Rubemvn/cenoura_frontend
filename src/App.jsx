import { useState } from 'react'
import './App.css'
import Score from './components/Score'
import Form from './components/Form'
import Votation from './components/Votation';

function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [vote, setVote] = useState("")

  const stages = [
    { id: 1, name: "form" },
    { id: 2, name: "votation" }
  ]

  const [stageScreen, setStageScreen] = useState(stages[0].name)
  const [screen, setScreen] = useState(stageScreen);


  const startVotation = (name, email) => {
    setName(name);
    setEmail(email);

    setScreen(stages[1].name);
  }

  const saveVote = async (vote) => {

    if ((!name) || (!email) || (!vote)) {
      return
    }

    setVote(vote)


    try {
      const response = await fetch("https://cenoura-backend.onrender.com/vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          vote: vote,
        })
      });

      if (!response.ok) {
        // email já usado
        const error = await response.json()
        console.log(error.message)
        alert(error.message)
        setScreen(stages[0].name);
      } else {
        const data = await response.json()
        console.log(data.message)
        alert(data.message)
        window.location.reload(false);

      }

    } catch (error) {
      console.error("Erro ao enviar voto", error.message);
    }
  }


  return (
    <>
      <div className='App'>
        <Score />
        {screen === "form" &&
          <Form
            startVotation={startVotation}
          />
        }
        {screen === "votation" &&
          <Votation
            saveVote={saveVote} />
        }
      </div>
    </>
  )
}

export default App
