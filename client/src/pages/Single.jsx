import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Menu } from "../components/Menu";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export function Single () {
   const [post,setPost] = useState([])

   const location = useLocation()
   const navigate = useNavigate();

   const postId = location.pathname.split("/")[2]

   const { currentUser } = useContext(AuthContext);

   useEffect(() => {
      async function fetchData() {
         try {
            const res = await axios.get(`/posts/${postId}`)
            setPost(res.data) 
         } catch (err) {
            console.log(err);
         }
      }
      fetchData()
   },[postId])

   async function handleDelete() {
      try {
         await axios.delete(`/posts/${postId}`)
         navigate("/")      
      } catch (err) {
         console.log(err);
      }
   }

   function getText(html) {
      const doc = new DOMParser().parseFromString(html, "text/html")

      return doc.body.textContent
   }

   return (
      <div className="single">
         <div className="content">
            <img src={`../upload/${post?.img}`} alt=""/>
             <div className="user">
               {
                  post.userImg && <img src={post.userImg} alt="" />
               }
                <div className="info">
                  <span>{post.username}</span>
                  <p>Posted {moment(post.data).fromNow()}</p>
                </div>
                {
                  currentUser.username === post.username && <div className="edit">
                     <Link to={`/write?edit=2`} state={post}>
                        <img src={Edit} alt="" />
                     </Link>
                     <img onClick={handleDelete} src={Delete} alt="" />
                  </div>
                }
             </div>
             <h1>{post.title}</h1>
               {getText(post.desc)}
         </div>
         <Menu cat={post.cat} />
      </div>
   )
}