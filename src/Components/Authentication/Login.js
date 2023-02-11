import { useState,useContext } from "react";
import { Box, Button, TextareaAutosize, TextField, Typography, Select, InputLabel, MenuItem, FormControl } from "@mui/material"
import { userData } from "../CommanUtils/Context";


const LoginFormCom = ({submit}) => {
  const [age, setAge] = useState('');
  const {setToggle, setLoginInput} = useContext(userData)

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const TakeInput = (e)=>{
         setLoginInput((previous)=>{
          return {...previous,[e.target.name]:e.target.value}
         })
  }

  return (
    <>
      <Box style={{ boxSizing: "border-box", padding: "25px", width: "60%", margin: "auto", borderRadius: "25px", background: "white", color: "#6D44BC"}}>
        <Typography style={{ fontSize: "25px", display: "flex", justifyContent: "center" }} >Login</Typography>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: "98%", marginTop: "30px" },
            boxSizing: "border-box"
          }}
          noValidate
          autoComplete="off"
          onChange={TakeInput}
        >
          <Box>
            <Typography style={{ fontSize: "14px" }}>Email-id <span style={{ color: "red" }}>*</span></Typography>
            <TextField
              required
              id="outlined-required"
              variant="standard"
              type="email"
              name="email"
              style={{ BoxSizing: "border-box", width: "100%", }}
            />
          </Box>
          <Box>
            <Typography style={{ fontSize: "14px" }}>Password <span style={{ color: "red" }}>*</span></Typography>
            <TextField
              required
              id="outlined-required"
              variant="standard"
              type="password"
              name="password"
              style={{ BoxSizing: "border-box", width: "100%" }}
            />
          </Box>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" style={{ width: "auto", height: "41px", borderRadius: "25px", background: "#6D44BC" }} onClick={submit}>
              Submit Now
            </Button>
          </Box>
          <Box>
            <Typography style={{textAlign:"center"}} onClick={(e)=>setToggle(true)}>
              Not have account?? don't worry <b>Click </b> to Register
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )

}

export default LoginFormCom;