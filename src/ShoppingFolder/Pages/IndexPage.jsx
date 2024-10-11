import React, { useEffect, useState } from 'react'
import GlobalHeader from '../Components/GlobalHeader'
import HeroBanner from '../Components/HeroBanner'
import CardCollections from '../Components/CardCollections'
import GlobalFooter from '../Components/GlobalFooter'
import { GentsImage, LadiesImage } from '../../data'
import LadiesCollections from '../Components/LadiesCollections'



const IndexPage = () => {

   const [gentsFashion, setGentsFashion] = useState(GentsImage)
   const [ladiesFashion, setLadiesFashion] = useState(LadiesImage)
   
    
  return (
    <div>
    <GlobalHeader/>
    <HeroBanner/>
    <CardCollections gentsFashion= {GentsImage}  />
    <LadiesCollections  ladiesFashion= {LadiesImage} />
    <GlobalFooter />
  </div>
  )
}

export default IndexPage


