import React from 'react'
import Cards from '../Components/Cards'
import Title from '../Components/Title'

const Overview = () => {
  return (
    <div className='body'>
        <Title />
    <div style={{display:'flex', flexDirection:"row",gap:"3rem",marginTop:"4rem", justifyContent:"center", flexWrap:"wrap"}}>
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    </div>
    </div>
  )
}

export default Overview
