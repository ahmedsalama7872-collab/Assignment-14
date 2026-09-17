import Home from './Pages/Home.jsx'
import Post from './Pages/Post.jsx'
import Layout from './components/Layout.jsx' 
import { createBrowserRouter, RouterProvider,createHashRouter } from 'react-router-dom'
import Latest from './components/Latest.jsx'
import Blog from './Pages/Blog.jsx'
import NotFound from './Pages/NotFound.jsx'




const routes = createHashRouter([
  {path:'', element:<Layout/>, children:[
    {index:true,element:<Home/>},
    {path:"home" ,element:<Home/>},
  {path:"blog",element:<Blog/>},
  {path:'blog/:slug', element:<Post/>},
{path:"about",element:<NotFound/>},
{path:'*',element:<NotFound/>}]} 

]);

export default function App() {
  return <RouterProvider router={routes} />;
}