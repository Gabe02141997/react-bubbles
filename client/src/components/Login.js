import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [ form, setForm ] =useState({
    username: '',
    password:''
  })

  const changeHandler = e => {
    setForm({...form, [e.target.name]: e.target.value})
  }
 
  const login = e => {
    e.preventDefault();
    axiosWithAuth().post('/login', form)
    .then(res => {
      // console.log(res)
      localStorage.setItem('token', res.data.payload)
      props.history.push('/bubbles')
      
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
        <input type='text' name ='username' value={form.username} onChange={changeHandler}/> 
        <input type='password' name ='password' value={form.password} onChange={changeHandler}/> 
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
