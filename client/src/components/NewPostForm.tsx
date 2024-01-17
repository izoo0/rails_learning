import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { API_URL } from "../vite-env.d"


const NewPostForm = ()=>{
     const [title, setTitle] = useState("")
     const [body, setBody] = useState("")
     const navigate = useNavigate()

     const submitPost = async (e)=>{
         e.preventDefault();

         const postData = {title,body}

         const response = await fetch(API_URL,{
          method: "POST",
          headers: {"content-Type" : "application/json"},
          body: JSON.stringify(postData)
        })
        if (response.ok) {
           const {id} = await response.json()
           navigate(`/single-post/${id}`)
        }else{
          console.log('An error occured')
        }

     }
     return(
          <>
           <form onSubmit={submitPost}>
               <label htmlFor="titleInput">Title:</label>
               <br />
               <input type="text" 
               id="titleInput" 
               value={title}  
               onChange={(e)=>setTitle(e.target.value)}
               />
               <br />
               <label htmlFor="bodyInput">Body:</label>
               <br />
               <textarea 
               id="titleInput" 
               value={body}  
               onChange={(e)=>setBody(e.target.value)}
               ></textarea>
               <br />
           <button type="submit">Submit</button>
           </form>
          </>
     )
}

export default NewPostForm