
import axios from "axios"
import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext()


export const AuthContextProvider = ({children}) => {
   const [currentUser, setCurrentUser] = useState(
      JSON.parse(localStorage.getItem("user")) || null)

   async function login(inputs){
         const res = await axios.post("/auth/login",inputs)
         setCurrentUser(res.data);
      }

   async function logout(inputs){
       await axios.post("/auth/logout")
      setCurrentUser(null);
   }

   useEffect(() => {
      localStorage.setItem("user", JSON.stringify(currentUser))
   }, [currentUser]);

   return (
      <AuthContext.Provider value={{currentUser, login, logout}}>
         {children}
      </AuthContext.Provider>
   )
}