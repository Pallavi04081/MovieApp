import { useState } from 'react'
import {BrowserRouter,Route,Routes,Navigate,Outlet} from 'react-router-dom'
import Authentication from './Pages/Authentication'
import Context from './Components/CommanUtils/Context'
import Home from './Pages/Home'
import Aboutus from './Pages/Aboutus'



function App() {
 
  const PrivateRoute = ({auth, ...props})=>{
    return auth?
    <>
    <Outlet/>
    </> :
    <>
    <Navigate replace to="/auth"/>
    </>
    }

const [post,setPost] = useState('')
const [auth,setAuth] = useState('')

 
  return (
    <>
    <div style={{height:"100vh"}}> 
    <Context>
   <BrowserRouter>
    <Routes>
      <Route path="/auth" element={<Authentication auth={setAuth}/>}/>
      <Route path="/" element={<PrivateRoute auth={auth}/>}>
      <Route path="/" element={<Home auth={setAuth}/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
   </Context>
   </div>   
    </>
  );
}

export default App;
