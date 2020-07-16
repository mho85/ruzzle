import React from 'react'
import '../../styles/Words.scss'

export default function Words({ words }) {
  return (
    <div id="words-container">
      {words.map((w, i) => <p key={i}>{w}</p>)}
      <button
        className="button disabled"
        disabled={true}
      >
        Affichage par ordre de saisie
        </button>
    </div>
  )
}