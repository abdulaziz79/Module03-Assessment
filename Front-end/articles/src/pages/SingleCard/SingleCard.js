import React from 'react'
import Styles from "./singlecard.module.css"


const SingleCard = () => {
  return (
    <div className={Styles.bodyy}>
        <div className={Styles.center}>
      
    <div className={Styles.card}>

      <img className={Styles.img} src='https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/01/24145013/article-writing.jpg'></img>
      <div style={{fontSize:"35px", opacity:"0.6"}}>
        General
      </div>
      <div style={{opacity:"0.6"}}>
        22/11/2022
      </div>
      <div style={{fontWeight:"bold",fontSize:"35px", textAlign:"left" }}>
        Title whatever is gonna lookkss its okatyyyyyyyyyyyyyyyyy
      </div>
      <div style={{fontSize:"35px", textAlign:"left"}}>
      n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia  
            </div>
        
    </div>
    </div>
  </div>

  )
}

export default SingleCard
