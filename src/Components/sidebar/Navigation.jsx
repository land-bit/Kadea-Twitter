import React from 'react'
import Menu from './navigation/Menu'
import {nav} from '../../../src/index'
export default function Navigation() {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap:'2.5vh'
    }}>
      {nav.map((e,i)=><Menu key={i} donnee={e}/>)}
    </div>
  )
}
