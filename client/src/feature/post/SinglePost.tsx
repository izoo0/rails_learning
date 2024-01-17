import { useEffect,useState } from "react"
import { useParams,useNavigate,Link } from "react-router-dom"
import { API_URL } from "../../vite-env.d"

const SinglePost = ()=>{
     const[post, setPost] = useState([null])
     const {id} = useParams()

     useEffect(()=>{
          const fetchCurrentPost = async () =>{
               try{
                    const response = await fetch(`${API_URL}/${id}`)
                    if(response.ok){
                         const json = await response.json()
                         setPost(json)
                    }else{
                         throw response
                    }
               }catch (e){
                   console.log('error')
               }
               
          };
          fetchCurrentPost()
     },[id]);
    if(!post) return <h2>Loading...</h2>

     return(
          <div>
               <h2>{post.title}</h2>
               <p>{post.body}</p>
          </div>
     )
}

export default SinglePost