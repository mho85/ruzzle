import React from 'react'
import '../../styles/Letter.scss'


export default function Letter({ letter }) {

  const underline = (character) => {
    return character === 'M' || character === 'W' ? "underline" : "initial"
  }
  const randomRotate = () => {
    const angles = [0, 90, 180, 270]
    const randomAngle = angles[Math.floor(Math.random() * angles.length)]
    return `rotate(${randomAngle}deg)`
  }

  return (
    <div id="letter-container">
      <p
        style={{ textDecoration: underline(letter), transform: randomRotate() }}
      >
        {letter}
      </p>
    </div>
  )
}