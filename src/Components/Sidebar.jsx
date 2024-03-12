import React from 'react'
import Buttons from './sidebar/Buttons'
import Navigation from './sidebar/Navigation'

export default function Sidebar() {
  return (
    <div style={{
        padding: '5vh 10vh',
    }}>
        <Navigation/>
      <Buttons/>
    </div>
  )
}

