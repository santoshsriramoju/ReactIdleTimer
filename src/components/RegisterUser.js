import React, { useState } from 'react';
import { registerUser } from '../DataSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const RegisterUser = () => {

    const [data, setData] = useState({ username: '', password: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleChange = (e) => {
        const name = e.target.name;
        setData((prevState) => ({
            ...prevState, [name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser({ username: data.username, password: data.password }));
        setData({username: '', password: ''})
        navigate("/login");
    }

    return (
        <div>
            <h3>Register User</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={data.username} name="username" onChange={handleChange} />
                <input type="password" value={data.password} name="password" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default RegisterUser