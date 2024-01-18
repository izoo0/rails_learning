import { lazy } from 'react'
const SinglePost = lazy(()=>import('../feature/post/SinglePost'))
const NewPost = lazy(()=>import('../feature/post/NewPost'))
const EditPost = lazy(()=>import('../feature/post/EditPost'))

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
     },

     {    
          path:'/edit-post/:id',
          title:'Edit-Post',
          components:EditPost
     },

]

const routes = [...otherRoutes]
export default routes