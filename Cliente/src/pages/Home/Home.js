import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import FormBar from '../../components/FormBar/FormBar'
import Content from '../../components/Content/Content'
import { useParams } from "react-router-dom"

const Home = () => {

  let { city } = useParams()

  return (
    <div className="bg-light">
      <Navbar/>
      <FormBar/>
      <Content city={city}/>
    </div>
  )
}

export default Home