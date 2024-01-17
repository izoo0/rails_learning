import './App.css'

import { Route,Routes } from 'react-router-dom'
import PostList from './feature/post/PostList'
import routes from './router'
import {Suspense, lazy } from 'react'
const DefaultLayout = lazy(()=>import('../src/layout/DefaultLayout'))

function App() {

  // Fetch Post from the API
  return (
    <>
      <h1>React On Rails Blog</h1>
      <h4>Find this layout on client/src/app.tsc</h4>
       <Routes>
    
        <Route element={<DefaultLayout/>}>
        <Route index element = {<PostList/>}/>
           { routes.map((route,index)=>{
              const { path, components: Component } = route
              return(
                <Route
                key={index}
                path={path}
                element={
                 <Suspense>
                   <Component/>
                 </Suspense>
                }
                />
              );
            })}
        </Route>
       </Routes>


      
    </>
  )
}

export default App
