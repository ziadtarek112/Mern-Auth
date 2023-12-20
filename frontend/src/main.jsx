import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter , createRoutesFromElements , Route , RouterProvider } from "react-router-dom"
import Home from './pages/home.jsx'
import Login from './pages/login.jsx'
import Register from './pages/Register.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App/>}>
        <Route index = {true} path='/' element = {<Home/>}/>
        <Route path ='/login' element={<Login/>}/>
        <Route path ='/register' element={<Register/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
