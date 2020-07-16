import React from 'react'
import '../../styles/Letters.scss'

import Letter from '../atomic/Letter'

export default function Letters({ letters }) {
  return (
    <div id="letters-container">
      {
        letters.map((row, index) => {
          return (
            <div id="square-row" key={index}>
              {row.map((l, indexL) => <Letter letter={l} key={indexL + index * 4} />)}
            </div>
          )
        })
      }
    </div>
  )
}