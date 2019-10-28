import React, { useState, useEffect } from 'react'
import fetch from 'axios'
import Beer from './Beer'

const Hanz = () => {

  const [beerProps, setBeerProps] = useState([])

    const getBeer = async () => {
      const res = await fetch('https://api.punkapi.com/v2/beers/random')
      const data = await res.data[0]
      setBeerProps(data)
    }

    useEffect(() => {
      getBeer()
    }, [])
const {name, brewers_tips, image_url, first_brewed, description} = beerProps

  return (
    <div>
      <button onClick={getBeer}>serveza pår favår</button>
      <Beer name={name} brewers_tips={brewers_tips} image_url={image_url} first_brewed={first_brewed} description={description} />
    </div>
  )
  }

export default Hanz
