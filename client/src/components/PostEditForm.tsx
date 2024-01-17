import {useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { API_URL } from "../vite-env.d"




const EditPostForm = () =>{
     const[post, setPost] = useState('')
     const navigate = useNavigate()
     const {id} = useParams()

      useEffect(()=>{
          // fetch the current post by ID
      const FetchCurrentPost = async () =>{
        try {
               const response = await fetch(`${API_URL}/${id}`)
               if(response.ok){
                    const json = await response.json()
                    setPost(json)
               }else{
                    throw response
               }
          }
        catch (e) {
          console.log("error",e);
        }
     }
     FetchCurrentPost()
      },[id]);

      const editPost = async (e)=> {
         e.preventDefault() 

          try {
               const response = await fetch(`${API_URL}/${id}`,{
                    method : 'PUT',
                    headers: {'Content-type' : 'application/json'},
                    body: JSON.stringify({post})
               });
               if (response.ok) {
                    const json = await response.json()
                    console.log("success", json)
                    navigate('/')
               }else{
                    throw response
               }
              
          } catch (error) {
               console.log("error",e)
          }
         } 
         if(!post) return <h2>Loading...</h2>
return(
     <>
     <form onSubmit={editPost}>
         <label htmlFor="textTitle">Title</label>
         <br />
         <input 
         type="text" 
         id="textTitle"
         value={post.title}
         onChange={(e)=>setPost({ ...post,title: e.target.value} )}
         />
         <br />
         <label htmlFor="textBody">Body</label>
          <br />
          <textarea
          value={post.body}
          onChange={(e)=>setPost({...post, body:e.target.value})}
          ></textarea>
          <br />
          <button type="submit">Update</button>
     </form>
     </>
)
}

export default EditPostForm