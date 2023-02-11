import {useState,useContext, useEffect} from 'react'
import LoginFormCom from '../Components/Authentication/Login'
import FormCom from '../Components/Authentication/FormCom'
import { userData } from '../Components/CommanUtils/Context'
import {useNavigate} from "react-router-dom"

const Authentication = ({auth})=>{

const Navigator = useNavigate()
const {toggle,input,logininput,setToggle} = useContext(userData)

useEffect(()=>{
  const Result = localStorage.getItem("Login")
  if(Result){
   auth(true)
   Navigator("/")
  }
},[])

const Submit = ()=>{
   if(!input.FullName || !input.password || !input.phone || !input.email){
      alert("invalid input")
   }
   else if(input.phone.length!=10){
      alert("mobile no must be 10 digit obly")
   }
   else if(input.password.length<8){
      alert("password must be at least 8 charactor long")
   }
   else{
      localStorage.setItem("RegistrationData",JSON.stringify(input))
      setToggle(false)
   }
}

const LoginUser = ()=>{
   const Data =  localStorage.getItem("RegistrationData")
   if(Data){
      const Result = JSON.parse(Data)
      if(Result.password==logininput.password && Result.email==logininput.email){
         localStorage.setItem("Login",true)
          auth(true)
         Navigator("/")

      }
      else{
         alert("Invalid email or Passowrd")
      }
   }
   else{
        alert("Please Register")
   }
}

 return(
    <>
    <div style={{background:"#6D44BC",height:"calc(100vh - 30px)",paddingTop:"30px"}}>
     {
        toggle ? <FormCom submit={Submit}/> 
        : <LoginFormCom submit={LoginUser}/>

     }   
    </div>
    </>
 )
}

export default Authentication;