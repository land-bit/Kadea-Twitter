import React from 'react'
import profil from "/Avatars/Profile-Photo.png"
import more from "/Icons/More-2.svg"
import privacy from "/Icons/Private.svg"

export default function ProfilSitting() {
  return (
    <div style={{width: "75%", position: 'absolute', display:'flex', justifyContent: 'space-between', bottom:'10px'}}>
      <div style={{display: "flex",gap:"10px" }}>
        <img src={profil} alt="" />
        <div>
        <p style={{
          display:'flex',
          justifyContent:'center'
        }}>Bradley Ortiz<img src={privacy} alt="" /></p>
        <span style={{color:'gray', fontWeight:'100'}}>@bradley_</span>
      </div></div>
      <img src={more} alt=""/>
    </div>
  )
}
