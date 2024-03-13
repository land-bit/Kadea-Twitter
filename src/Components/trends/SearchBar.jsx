import React from 'react'
import search from '/Icons/Group.svg'

export default function SearchBar() {
  return (
    <div style={{
        display : 'flex',
        justifyContent : 'center',
        gap : '6%',
        backgroundColor : '#202327',
    }}>
        <img src={search} alt="" />
        <input type="text" placeholder='Search' />
    </div>
  )
}
