import React, { useEffect, useState } from 'react'
import { API_URL } from '../../vite-env.d'
import { Link } from 'react-router-dom'

const PostList = () => {
     const[posts,setPost] = useState([])
     const[, setLoading] = useState([true])
     const[,setError] = useState([null])

     useEffect(()=>{
          async function LoadPost() {
               try{
                    const response = await fetch(API_URL)
                    if(response.ok){
                         const json = await response.json()
                          setPost(json)
                          console.log(json)
                    }else{
                         throw response
                    }
               }
               catch (e){
                  setError([]);
                  console.log("an error occored", e)
                  
               }finally{
                    setLoading([false])
               }
          }
          LoadPost()
     },[]);

     const deletePost = async (id)=>{
          try {
              const response = await fetch(`${API_URL}/${id}`,{
                 method: 'DELETE',
              }) ;
              if (response.ok) {
               setPost(posts.filter((post)=>{post.id !==id}))
              }else{
               throw response
              }
          } catch (error) {
               console.log(error)
          }
      }
  return (
    <>
    {
     posts.map((post)=>(
          <div key={post.id} className='post-list'>
              <h2><Link to={`/single-post/${post.id}`}>{post.title}</Link></h2>
              <div>
              <Link to={`/edit-post/${post.id}`}>Edit</Link>
              </div>
              <div>
              <button onClick={()=>deletePost(post.id)}>Delete</button>
              </div>
          </div>  
     ))
    }
    </>
  )
}

export default PostList