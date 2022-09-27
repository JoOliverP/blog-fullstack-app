import { Link } from "react-router-dom";

export function Register() {
   return (
      <div className="auth">
         <h1>Register</h1>
         <form>
            <input required type="text" placeholder="username" />
            <input required type="email" placeholder="email" />
            <input required type="password" placeholder="password" />
            <button>Register</button>
            <p>Ocorreu um erro!</p>
            <span>Já possui conta ? <Link to="/login">Login</Link></span>
         </form>
      </div>
   )
}