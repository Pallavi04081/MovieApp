import { useState,useContext } from "react";
import { Box, Button, TextareaAutosize, TextField, Typography, Select, InputLabel, MenuItem, FormControl } from "@mui/material"
import { userData } from "../CommanUtils/Context";



const FormCom = ({submit}) => {
  const [age, setAge] = useState('');
  const {setToggle,setInput} = useContext(userData)

  
  const handleChange = (event) => {
    setAge(event.target.value);
    setInput((previous)=>{
      return{...previous,["profession"]:event.target.value}
    })
  };

  const takeInput = (e)=>{
    setInput((previous)=>{
      return{...previous,[e.target.name]:e.target.value}
    })
  }

  return (
    <>
      <Box style={{ boxSizing: "border-box", padding: "25px", width: "60%", margin: "auto", borderRadius: "25px", background: "white", color: "#6D44BC" }}>
        <Typography style={{ fontSize: "25px", display: "flex", justifyContent: "center" }} >Register</Typography>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: "98%", marginTop: "30px" },
            boxSizing: "border-box"
          }}
          noValidate
          autoComplete="off"
          onChange={takeInput}
        >
          <Box>
            <Typography style={{ fontSize: "14px" }}>Fulll Name <span style={{ color: "red" }}>*</span></Typography>
            <TextField
              required
              id="outlined-required"
              variant="standard"
              name="FullName"
              style={{ BoxSizing: "border-box", width: "100%", }}
            />
          </Box>
          <Box>
            <Typography style={{ fontSize: "14px" }}>Password <span style={{ color: "red" }}>*</span></Typography>
            <TextField
              required
              id="outlined-required"
              variant="standard"
              name="password"
              style={{ BoxSizing: "border-box", width: "100%" }}
            />
          </Box>
          <Box style={{ display: "flex", flexDirection: "row" }}>
            <Box style={{ BoxSizing: "border-box", width: "50%", marginRight: "25px" }}>
              <Typography style={{ fontSize: "14px" }}>Phone <span style={{ color: "red" }}>*</span></Typography>
              <TextField
                required
                id="outlined-required"
                type="number"
                name="phone"
                variant="standard"
                style={{ width: "100%" }}
              />
            </Box>
            <Box style={{ BoxSizing: "border-box", width: "50%", marginLeft: "25px" }}>
              <Typography style={{ fontSize: "14px" }}>Email-id <span style={{ color: "red" }}>*</span></Typography>
              <TextField
                required
                id="outlined-required"
                type="email"
                name="email"
                variant="standard"
                style={{ width: "100%" }}
              />
            </Box>
          </Box>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 52, marginTop: "0px", marginRight: "0px" }}>
            <Typography style={{ fontSize: "14px" }}>Profession</Typography>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="">
                Other
              </MenuItem>
              <MenuItem value={"Reactjs Developer"} style={{fontSize:"14px"}}>Reactjs Developer</MenuItem>
              <MenuItem value={"Nodejs Developer"} style={{fontSize:"14px"}}>Nodejs Developer</MenuItem>
              <MenuItem value={"Full-Stack Developer"} style={{fontSize:"14px"}}>Full-Stack Developer</MenuItem>
              <MenuItem value={"MERN Developer"} style={{fontSize:"14px"}}>MERN Developer</MenuItem>
              <MenuItem value={"MEAN Developer"} style={{fontSize:"14px"}}>MEAN Developer</MenuItem>
            </Select>
          </FormControl>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" style={{ width: "auto", height: "41px", borderRadius: "25px", background: "#6D44BC" }} onClick={submit}>
              Submit Now
            </Button>
          </Box>
          <Box>
            <Typography style={{textAlign:"center"}} onClick={(e)=>{setToggle(false)}}>
              Login
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )

}

export default FormCom;