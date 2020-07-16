import React from 'react'
import '../../styles/Letter.scss'


export default function Letter({ letter }) {
  return (
    <div id="letter-container">
      {letter}
    </div>
  )
}