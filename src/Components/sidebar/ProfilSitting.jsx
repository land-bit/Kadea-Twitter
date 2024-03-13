import React from 'react'
import profil from "/Avatars/Profile-Photo.png"
import more from "/Icons/More-2.svg"
import privacy from "/Icons/Private.svg"

export default function ProfilSitting() {
  return (
    <div style={{width: "80%", position: 'absolute', display:'flex', justifyContent: 'space-around', bottom:'15px'}}>
      <img src={profil} alt="" />
      <div>
        <p style={{
          display:'flex',
          justifyContent:'center'
        }}>Bradley Ortiz<img src={privacy} alt="" /></p>
        <strong style={{color:'gray"', fontWeight:'100'}}>@bradley_</strong>
      </div>
      <img src={more} alt="" style={{}}/>
    </div>
  )
}
