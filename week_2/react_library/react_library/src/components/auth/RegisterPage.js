import React, {useState} from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import {auth} from "../../firebase/firebase"

export default function RegisterPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  async function onFormSubmit(e){
    e.preventDefault()
    console.log(email)
    console.log(password)
    try{
      const userCred = await createUserWithEmailAndPassword(auth, email, password)
      console.log(userCred)
      navigate('/login')
    }catch(err){
      alert(err)
    }
  }
  return (
    <div className="container my-5">
      <div className ="card card-body">
        <h1 className="text-center"> Registration</h1>

<form onSubmit={onFormSubmit}>
  <div class="form-group mb-2">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
    onChange = {(e) => {
      setEmail(e.target.value)
    }}
    value = {email}
    ></input>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group mb-2">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
    onChange = {(e) => {
      setPassword(e.target.value)
    }}
    value = {password}
    ></input>
  </div>

  <div className=" d-flex justify-content-end">
    <button type="submit" class="btn btn-primary mt-2 d-flex justify-content-end superButton">Register</button>
  </div>
</form>

      </div>
    </div>
  )
}


