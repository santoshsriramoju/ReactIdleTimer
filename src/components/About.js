import React,{useEffect} from 'react'
import { useSelector } from 'react-redux';

const About = (props) => {

  const isLoggedIn = useSelector(state=> state.users.isLoggedIn);

  useEffect(() => {
    isLoggedIn?props.startTimer(): props.pauseTimer();
  }, [])

  return (
    <div>About</div>
  )
}

export default About