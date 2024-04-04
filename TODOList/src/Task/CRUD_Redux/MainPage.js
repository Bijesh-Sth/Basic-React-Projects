import React from 'react'
import Add from './Components/Add'
import Display from './Components/Display'

const MainPage = () => {
  return (
    <div style={{ width: '80%', display: 'flex', justifyContent: 'center', flexDirection: 'column',alignItems: 'center' }}>
        <Add/>
        <Display/>
    </div>
  )
}

export default MainPage