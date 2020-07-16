import React, { useState } from 'react'
// import '../styles/AddWord.scss'

export default function AddWord() {
  const [word, setWord] = useState("")

  const resetField = (event) => {
    event.preventDefault()
    setWord("")
  }
  const submitWord = (event) => {
    event.preventDefault()
    // TODO: Check if word is OK.
    console.log('Word submitted:', word)
    setWord("")
  }

  return (
    <div id="addword-input">
      <form
        onSubmit={submitWord}
      >
        <input
          className="input-field"
          type="text"
          onChange={e => setWord(e.target.value)}
          value={word}
        />
        <input type="submit" value="Ajouter" />
        <button
          onClick={resetField}
        >
          Effacer
          </button>
      </form>
    </div>
  )
}