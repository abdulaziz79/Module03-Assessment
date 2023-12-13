import React from 'react'
import Styles from "./cards.module.css"
import { Link } from 'react-router-dom'

const Cards = () => {
  return (
    <div className={Styles.bodyy}>
      
      <div className={Styles.card}>

        <img className={Styles.img} src='https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/01/24145013/article-writing.jpg'></img>
        <div style={{fontSize:"20px", opacity:"0.6"}}>
          General
        </div>
        <div style={{opacity:"0.6"}}>
          22/11/2022
        </div>
        <div style={{fontWeight:"bold",fontSize:"20px", textAlign:"left" }}>
          Title whatever is gonna lookkss its okatyyyyyyyyyyyyyyyyy
        </div>
        <div style={{fontSize:"20px", textAlign:"left"}}>
        n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia  
              </div>
              <Link to ="/singlecard" >
              <button className={Styles.btn}>Show more</button>
              </Link>
      </div>
      
    </div>
  )
}

export default Cards
