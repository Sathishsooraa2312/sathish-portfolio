import { Paper,Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Img1 from '../images/movie.png'
import Img2 from '../images/admin.png'
import Img3 from '../images/youtube.png'
import Img4 from '../images/country.png'
function Project() {
  return (<>
  <Box sx={{padding:5}}  className="main-container">
<Paper elevation={12}>
  <Box sx={{padding:3}}>
  <h6 id="Project" style={{fontSize:"20px",textAlign:"center",marginTop:"3px",marginBottom:"3px",color:"crimson"}}>Projects</h6>
  <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:3,padding:4}}>
    <Box sx={{height:"auto",width:"358px"}}  >
    <Paper elevation={20}>
           <Box className="Project-box">
            <img src={Img1} alt="admin" className="project-poster"/>
             <h4 className="project-name">Movie App</h4>
             <Box sx={{display:"flex",flexDirection:"column",gap:{xs:1,sm:1},flexWrap:"wrap",justifyContent:"center"}}>
    <a style={{textDecoration:"none"}} href="https://github.com/Sathishsooraa2312/movietvielisttask.git"><Button sx={{backgroundColor:"crimson",color:"black",padding:"5px 20px",width:"100%"}}>Github Frontend</Button></a>
    <a style={{textDecoration:"none"}} href="https://github.com/Sathishsooraa2312/b39node"><Button sx={{backgroundColor:"crimson",color:"black",padding:"5px 20px",width:"100%"}}>Github Backend</Button></a>
    <a style={{textDecoration:"none"}} href="https://majestic-banoffee-d1b107.netlify.app/"><Button sx={{backgroundColor:"crimson",color:"black",padding:"5px 20px",width:"100%"}}>Netlify</Button></a>
    </Box>
           </Box>
        </Paper>
    </Box>
   
    <Box sx={{height:"auto",width:"358px"}}  >
    <Paper elevation={20}>
           <Box className="Project-box">
            <img src={Img3} alt="admin" className="project-poster"/>
             <h4 className="project-name">You tube Clone</h4>
             <Box sx={{display:"flex",flexDirection:"column",gap:{xs:1,sm:1},flexWrap:"wrap",justifyContent:"center"}}>
    <a style={{textDecoration:"none"}} href="https://github.com/Sathishsooraa2312/youtube-clone-frontend.git"><Button sx={{backgroundColor:"crimson",color:"black",padding:"5px 20px",width:"100%"}}>Github Frontend</Button></a>
    <a style={{textDecoration:"none"}} href="https://github.com/Sathishsooraa2312/youtubeclone-backend.git"><Button sx={{backgroundColor:"crimson",color:"black",padding:"5px 20px",width:"100%"}}>Github Backend</Button></a>
    <a style={{textDecoration:"none"}} href="https://whimsical-conkies-f96821.netlify.app/"><Button sx={{backgroundColor:"crimson",color:"black",padding:"5px 20px",width:"100%"}}>Netlify</Button></a>
    </Box>
           </Box>
        </Paper>
    </Box>
    <Box sx={{height:"auto",width:"358px"}}  >
    <Paper elevation={20}>
           <Box className="Project-box">
            <img src={Img2} alt="admin" className="project-poster"/>
             <h4 className="project-name">Admin Dashboard</h4>
             <Box sx={{display:"flex",flexDirection:"column",gap:{xs:1,sm:1},flexWrap:"wrap",justifyContent:"center"}}>
    <a style={{textDecoration:"none"}} href="https://github.com/Sathishsooraa2312/react-Task-Dashboard.git"><Button sx={{backgroundColor:"crimson",color:"black",padding:"5px 20px",width:"100%"}}>Github</Button></a>
    <a style={{textDecoration:"none"}} href="https://effulgent-marshmallow-a815fa.netlify.app/"><Button sx={{backgroundColor:"crimson",color:"black",padding:"5px 20px",width:"100%"}}>Netlify</Button></a>
    </Box>
           </Box>
        </Paper>
    </Box>
    <Box sx={{height:"auto",width:"358px"}}  >
    <Paper elevation={20}>
           <Box className="Project-box">
            <img src={Img4} alt="admin" className="project-poster"/>
             <h4 className="project-name">Country API</h4>
             <Box sx={{display:"flex",flexDirection:"column",gap:{xs:1,sm:1},flexWrap:"wrap",justifyContent:"center"}}>
    <a style={{textDecoration:"none"}} href="https://github.com/Sathishsooraa2312/day-18-restcounties-task.git"><Button sx={{backgroundColor:"crimson",color:"black",padding:"5px 20px",width:"100%"}}>Github</Button></a>
    <a style={{textDecoration:"none"}} href="https://rococo-blancmange-783cb4.netlify.app/"><Button sx={{backgroundColor:"crimson",color:"black",padding:"5px 20px",width:"100%"}}>Netlify</Button></a>
    </Box>
           </Box>
        </Paper>
    </Box>
</Box>  
  </Box>
</Paper>
  </Box>
    
  </>)
}

export default Project