import {createContext,useState} from 'react'
export const userData = createContext();


const Context = ({children})=>{
  const [input,setInput] = useState({
    FullName:"",
    password:"",
    phone:"",
    email:"",
    profession:""
})

const [logininput,setLoginInput] = useState({
  password:"",
  email:"",
})

const [toggle,setToggle] = useState(false)

     return(
       <>
      <userData.Provider  value={{
       input,
       setInput,
       logininput,
       setLoginInput,
       toggle,
       setToggle
    }}>
         {children}
      </userData.Provider>
       </>
     )
}


export default  Context;