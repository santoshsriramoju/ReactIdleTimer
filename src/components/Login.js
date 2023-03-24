import React, { useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { login } from '../DataSlice';

const Login = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(login());
    props.startTimer();
  }, [])

  const usersData = useSelector(state => state.users.registeredUsers);
  const [data, setData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    setData((prevState) => ({
      ...prevState, [name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usersData.length === 0) {
      alert("User doesn't exist, please register")
      navigate("/register");
    }
    usersData && usersData.length > 0 && usersData.map(users => {
      if (users.username === data.username && users.password === data.password) {
        navigate("/home", { state: { username: users.username } });

      } else {
        alert("Invalid credentials");
      }
    })
  }

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={data.username} name="username" onChange={handleChange} />
        <input type="password" value={data.password} name="password" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login