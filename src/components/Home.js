import React, { useEffect } from 'react'
import useIdle from '../hooks/useIdleTimer'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'



const Home = () => {

  useEffect(()=>{
  },[]);
   
  const username = useLocation()?.state?.username || "Guest";
  return (
    <h1>Welcome {username}</h1>
  )

}

export default Home