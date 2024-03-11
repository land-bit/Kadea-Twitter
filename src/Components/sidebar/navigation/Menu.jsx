import React from 'react'

export default function Menu({donnee}) {
  return (
    <div style={{
        display: 'flex',
        alignItems : 'center',
        gap : '20px'
    }}>
      <span>{donnee.logoAfter}</span>
      <h4>{donnee.text}</h4>
    </div>
  )
}
