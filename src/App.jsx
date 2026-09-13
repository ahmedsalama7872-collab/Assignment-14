import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home.jsx'
import Subscribe from './Subscribe.jsx'
import Layout from './Layout.jsx' // لو كنت تستخدم Layout رئيسي
import { createBrowserRouter, RouterProvider } from 'react-router-dom' // <- التعديل هنا (إضافة -dom)

// تعريف المسارات
const routes = createBrowserRouter([
  { 
    path: '/', 
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ) 
  },
  { 
    path: '/home', 
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ) 
  },
  { 
    path: '/blog', 
    element: (
      <>
        <Navbar />
        <Subscribe />
        <Footer />
      </>
    ) 
  }
]);

export default function App() {
  return <RouterProvider router={routes} />;
}