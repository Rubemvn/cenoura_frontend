import React, { useRef, useState } from 'react'
import './componentsStyles/Form.css'

const Form = ({ startVotation }) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const letterInputRef = useRef(null)


  const handleSubmit = (e) => {
    e.preventDefault()
    startVotation(name, email)
    // console.log(name, email)
  }

  return (
    <div className='formContent'>
      <form className='form'
        onSubmit={handleSubmit}>
        <input
          className='inputText'
          type="text"
          placeholder="Digite seu nome aqui..."
          required
          onChange={(e) => setName(e.target.value.toLowerCase())}
        />
        <input
          className='inputText'
          type="email"
          placeholder="Digite seu email..."
          required
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
        />

        <button className='goToVotation'>Ir para Votação</button>
      </form>
    </div>
  )
}

export default Form