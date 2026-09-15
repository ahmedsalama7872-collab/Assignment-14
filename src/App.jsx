import React from 'react'
import Home from './Pages/Home.jsx'
import Post from './Pages/Post.jsx'
import Subscribe from './components/Subscribe.jsx'
import Layout from './components/Layout.jsx' // لو كنت تستخدم Layout رئيسي
import { createBrowserRouter, RouterProvider } from 'react-router-dom' // <- التعديل هنا (إضافة -dom)
import Latest from './components/Latest.jsx'
import Blog from './Pages/Blog.jsx'

// تعريف المسارات
const routes = createBrowserRouter([
  {path:'', element:<Layout/>, children:[
    {index:true,element:<Home/>},
    {path:"home" ,element:<Home/>},
  {path:"blog",element:<Blog/>},
  {path:'blog/:slug', element:<Post/>},
{path:"about",element:<Latest/>}]} 

]);

export default function App() {
  return <RouterProvider router={routes} />;
}