import React from 'react'
import { LinearProgress } from '@material-ui/core'
import '../../styles/Timer.scss'

export default function Timer({ progress }) {

  return (
    <div id="timer-container">
      Timer
      <LinearProgress variant="determinate" value={progress} />
    </div>
  )
}