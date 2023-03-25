import React, { useState, useEffect } from 'react'
import useIdle from './hooks/useIdleTimer'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { useNavigate, Outlet, NavLink, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Modal from './components/Modal'
import { useSelector, useDispatch } from 'react-redux'
import { showModal, hideModal } from './DataSlice'
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Logout from './components/Logout';
import RegisterUser from './components/RegisterUser';


import "./App.css"

const App = () => {
  const navigate = useNavigate();
  const modal = useSelector(state => state.users.showModal);
  const dispatch = useDispatch();

  useEffect(() => {
    idleTimer.pause();
  }, [])

  const logout = () => {
    console.log("User got logged out")
    dispatch(hideModal());
    navigate("/");
  }

  const handleModal = () => {
    dispatch(showModal());
  }

  const handleClose = () => {
    dispatch(hideModal());
    navigate("/");
  }

  const handleSave = () => {
    dispatch(hideModal());
    idleTimer.start();
  }

  const startTimer = () => {
    idleTimer.start();
  }

  const pauseTimer = () => {
    idleTimer.pause();
  }

  const handleResume = () => {
    idleTimer.resume();
  }

  const { idleTimer } = useIdle({
    onIdle: logout,
    idleTime: 10000,
    showModal: handleModal
  })

  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <Container>
          <Nav className="me-auto">
            <NavLink className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            } to="/home">Home</NavLink>{" "}
            <NavLink className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            } to="/about">About</NavLink>{" "}
            <NavLink className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            } to="/login" >Login</NavLink>{" "}
            <NavLink className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            } to="/logout">Logout</NavLink>{" "}
            <NavLink className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            } to="/register">Register</NavLink>{" "}
          </Nav>
        </Container>
      </Navbar >
      <Routes>
        <Route index exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About pauseTimer={pauseTimer} startTimer={startTimer} />} />
        <Route exact path="/login" element={<Login startTimer={startTimer} />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route exact path="/register" element={<RegisterUser />} />
        <Route exact path="*" element={() => <h1>No match</h1>} />
      </Routes>
      {
        modal && <Modal handleClose={handleClose} handleSave={handleSave} />
      }
    </React.Fragment>
  )
}
export default App