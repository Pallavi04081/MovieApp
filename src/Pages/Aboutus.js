import ContactInfo from "../Components/ContactInfo/ContactInfo"
import  NavBar from "../Components/Header/NavBar"

const Aboutus = ()=>{
    return(
        <>
        <NavBar/>
        <div style={{width:"70%",margin:"auto",marginTop:"40px"}}>
        <ContactInfo/>
        </div>
        </>
    )
}

export default Aboutus