import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Login() {
   const [inputs, setInputs] = useState({
      username: "",
      password:"",
   })

   const [err,setError] = useState(null);

   const navigate = useNavigate()

   function handleChange(e){
      setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
   }

   async function handleSubmit(event){
     event.preventDefault()
      try {
         await axios.post("/auth/login",inputs)
         navigate("/")
      } catch (err) {
         setError(err.response.data)
      }

   }
   return (
      <div className="auth">
         <h1>Login</h1>
         <form>
            <input required type="text" placeholder="username" name="username"  onChange={handleChange}/>
            <input required type="password" placeholder="password"  name="password" onChange={handleChange}/>
            <button onClick={handleSubmit}>Login</button>
            {err && <p>Ocorreu um erro!</p>}
            <span>Não possui conta ? <Link to="/register">Register</Link></span>
         </form>
      </div>
   )
}