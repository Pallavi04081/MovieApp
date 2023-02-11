import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import {Link,useNavigate} from 'react-router-dom';


export default function TemporaryDrawer({auth}) {
 
  const Navigator =  useNavigate()

  const [state, setState] = React.useState({
    right: false,
  });
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const Nav = (e)=>{
    console.log("hello")
    if(e.target.id=="Logout"){
      localStorage.setItem("Login","")
       auth(false)
       Navigator("/auth")
    }
    else if(e.target.id=="Company Info"){
      Navigator("/aboutus")
    }
    else if(e.target.id=="Home"){
      console.log(e.target.id)
      Navigator("/")
    }
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{background:"#E6E6FA",height:"100vh"}} onClick={Nav}>
        {['Home', 'Contact us', 'Company Info', 'Logout'].map((text, index) => (
          <ListItem key={text} id={text} style={{height:"10vh",borderBottom:"1px solid",marginLeft:"10px",textAlign:"center"}}>
          {text}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
    {['right'].map((anchor) => (
      <React.Fragment key={anchor}>
        <MenuIcon onClick={toggleDrawer(anchor, true)}/>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    ))}
  </div>
  );
}