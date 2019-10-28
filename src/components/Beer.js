import React from 'react'

const Beer = ({name, brewers_tips, image_url, first_brewed, description}) => {


  return (
    <div>
  <h1>{name}</h1>
  <p>{brewers_tips}</p>
  <img src={image_url}/>
  <p>{first_brewed}</p>
  <p>{description}</p>
  </div>
  )
}

export default Beer
