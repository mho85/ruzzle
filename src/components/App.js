import React, { useState, useEffect } from 'react'
// import fs from 'fs'
import '../styles/App.scss'

import Letters from './blocks/Letters'
import AddWord from './blocks/AddWord'
import Words from './blocks/Words'
import Timer from './blocks/Timer'

const squareSize = 4

/** Parse dictionary */
// const filePath = '../assets/words_alpha.txt'
// fs.readFile(filePath, (error, txtString) => {
//   if (error) throw error;
//   console.log(txtString.toString())
// })

const GAME_SECONDS = 60000

/** Create an array of random letters */
const randomLetters = () => {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'y',
    'z'
  ]
  const letters = [];

  for (let i = 0; i < squareSize; i++) {
    let row = []

    for (let j = 0; j < squareSize; j++) {
      row.push(alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase())
    }

    letters.push(row)
  }


  return letters
}

export default function App() {

  // State
  const [foundWords, setFoundWords] = useState(["AB", "BC"])
  const [ongoingGame, setOngoingGame] = useState(false)

  useEffect(() => {
    if (!ongoingGame) {
      setOngoingGame(true)
      setTimeout(() => {
        alert("End of game")
        setOngoingGame(false)
      }, GAME_SECONDS)

      // let gameStart = new Date();
      // let gameEnd = gameStart.setDate(gameStart.getMinutes() + GAME_SECONDS / 60000)

    }
  }, [ongoingGame])

  const letters = randomLetters()
  console.log(letters)

  return (
    <div id="app-container">
      <p>Ruzzle</p>
      <Timer progress={50} />
      <Letters letters={letters} />
      <AddWord />
      <p>{foundWords.length > 0 && foundWords[foundWords.length - 1]}</p>
      <Words words={foundWords} />
      <div id="footer">
        <p>Mots trouvés: {foundWords.length} sur {53}</p>
        <p><i>(Cliquez sur un mot pour connaître la définition)</i></p>
      </div>
    </div >
  )
}