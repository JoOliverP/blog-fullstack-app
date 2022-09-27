import { Link } from "react-router-dom";

export function Login() {
   return (
      <div className="auth">
         <h1>Login</h1>
         <form>
            <input required type="text" placeholder="username" />
            <input required type="password" placeholder="password" />
            <button>Login</button>
            <p>Ocorreu um erro!</p>
            <span>Não possui conta ? <Link to="/register">Register</Link></span>
         </form>
      </div>
   )
}