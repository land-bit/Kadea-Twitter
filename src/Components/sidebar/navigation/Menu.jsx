import React from 'react'

export default function Menu({donnee}) {
  return (
    <div style={{
        display: 'flex',
        alignItems : 'center',
        gap : '20px'
    }}>
      <span><img src={donnee.logoAfter} alt="" style={{width : '30px'}}/></span>
      <h2 style={{fontWeight:'100'}}>{donnee.text}</h2>
    </div>
  )
}
