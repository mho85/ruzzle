import React from 'react'
import '../styles/App.scss'

import Letters from './blocks/Letters'

const squareSize = 4

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
  const letters = randomLetters()
  console.log(letters)

  return (
    <div id="app-container">
      <p>Ruzzle</p>
      <Letters letters={letters} />
    </div>
  )
}