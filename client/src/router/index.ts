import { lazy } from 'react'
const SinglePost = lazy(()=>import('../feature/post/SinglePost'))
const NewPost = lazy(()=>import('../feature/post/NewPost'))

const otherRoutes = [
     {    
          path:'/single-post/:id',
          title:'Single-Post',
          components:SinglePost 
     },
     {    
          path:'/new-post',
          title:'New-Post',
          components:NewPost
     }
]

const routes = [...otherRoutes]
export default routes