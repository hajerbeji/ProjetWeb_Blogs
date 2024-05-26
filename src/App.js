import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
//importation les components 
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Login from './components/Login'
import Inscription from './components/Inscription'
import Write from './components/Write';

//importation les css files
import './css/navbar.css'
import './css/footer.css'
import './css/home.css'
import './css/authentification.css'
import './css/write.css'
import './css/post.css'

import { useState } from 'react';



function App() {
  const [Username,setUsername]=useState('')
  const [Password,setPassword]=useState('')
  const [Email,setEmail]=useState('')

  const [typeChoisis,setTypeChoisis]=useState('')
  const [page,setPage]=useState(1)
  const Layout=()=>{
    return(
      <>
        <Navbar Username={Username} page={page} setPage={setPage} />
        <Home Username={Username} Password={Password} Email={Email} typeChoisis={typeChoisis} page={page} />
        <Footer />
      </>
    )
  }

  const routes=createBrowserRouter([
    {path:"/",element:<Layout/>},
    {path:"/login",element:<Login/>},
    {path:"/inscription",element:<Inscription Username={Username} setUsername={setUsername}
                                           Password={Password} setPassword={setPassword}
                                           Email={Email} setEmail={setEmail} />},
    ])
  
  return (
    <div className="App">
      <div className='containor'>
        <RouterProvider router={routes}>
        </RouterProvider>
      </div>
    </div>
  );
}

export default App;
