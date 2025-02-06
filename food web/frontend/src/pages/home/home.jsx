import React, { useState } from 'react'
import "./home.css"
import Header from '../../components/header/header'
import ExploreMenu from '../../components/ExploreMenu/Exploremenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Download from '../../components/Download/Download'

const Home = () => {

const[category,setCategory]=useState("All");
   
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <Download/>
    </div>
  )
}

export default Home

