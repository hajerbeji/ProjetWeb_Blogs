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


const Layout=()=>{
  return(
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}
const routes=createBrowserRouter([
  {path:"/",element:<Layout/>},
  {path:"/login",element:<Login/>},
  {path:"/inscription",element:<Inscription/>},
  {path:"/write",element:<Write/>}
])
function App() {
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
