import { useState } from 'react'
import './componentsStyles/Votation.css'

const Votation = ({ saveVote }) => {
  const [selected, setSelected] = useState(null)
  // const activeOrNot = selected ? 'chosenCandidate' : '';
  const [vote, setVote] = useState('')
  let option = ''


  const selectVote = (candidate) => {
    selectingCandidate(candidate)


    if (selected === candidate) {
      setSelected(null)
    } else {
      setSelected(candidate)
    }
  }

  const selectingCandidate = (candidate) => {
    if (selected === candidate) {
      option = ''
      setVote('')
    } else {
      option = candidate
      setVote(option)
    }
  }

  return (
    <div className="votation">
      <div className={`candidate ${selected === "madalena" ? "chosenCandidate" : ''}`} onClick={() => {
        selectVote('madalena')

      }}>Madalena</div>
      <div className={`candidate ${selected === "zero_papo" ? "chosenCandidate" : ''}`} onClick={() => {
        selectVote('zero_papo')

      }}>Zero-Papo</div>

      <button className='vote' onClick={() => {
        vote ? saveVote(vote) : null
      }}>Votar</button>
    </div>
  )
}

export default Votation