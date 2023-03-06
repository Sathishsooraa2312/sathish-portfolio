import React from 'react'
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
function Education() {
    return (<>
<Box sx={{padding:4}} className="main-container">
<Paper elevation={12}>
<div  className="education-box">
<h6 id="Education" style={{fontSize:"20px",textAlign:"center",marginTop:"3px",marginBottom:"3px",color:"crimson"}}>Education <SchoolIcon /></h6>
<Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:3,padding:4}}>
    <Box sx={{height:"auto",width:"358px"}}  >
    <Paper elevation={20}>
           <Box className="education-details">
             <h4 className='school-details'>Secondary School of Leaving Certificate</h4>
             <h4 className="school-name">Sri N.K.M Hr.Sec School</h4>
              <h4 className='school-year'>Venue : Vellore</h4>
              <h4 className='school-venvue'>
              Year  : 2013
              </h4>
              <h5 className='education-percentagae'>
                Percentage : <span className='mark-highlight'>89%</span>
              </h5>
           </Box>
        </Paper>
    </Box>
   
        <Box sx={{height:"228px",width:"358px"}} className="education-box" >
        <Paper elevation={20}>
           <Box className="education-details">
             <h4 className='school-details'>Higher Secondary School</h4>
             <h4 className="school-name">Vetri Vikaas Boys Hr.Sec School</h4>
              <h4 className='school-year'>Venue : Salem</h4>
              <h4 className='school-venvue'>
              Year  : 2015
              </h4>
              <h5 className='education-percentagae'>
                Percentage :<span className='mark-highlight'> 82.5%</span>
              </h5>
           </Box>
        </Paper>
        </Box>
        <Box sx={{height:"228px",width:"358px"}} className="education-box" >
        <Paper elevation={20}>
           <Box className="education-details">
             <h4 className='school-details'>Bachelor Of Engineering</h4>
             <h4 className="school-name">Jeppiaar Institiue Of Technology</h4>
              <h4 className='school-year'>Venue : Chennai</h4>
              <h4 className='school-venvue'>
              Year  : 2015-2019
              </h4>
              <h5 className='education-percentagae'>
                Percentage : <span className='mark-highlight'>7.5 CGPA</span>
              </h5>
           </Box>
        </Paper>
        </Box>
        <Box sx={{height:"228px",width:"358px"}} className="education-box" >
        <Paper elevation={20}>
           <Box className="education-details">
             <h4 className='school-details'>Full Stack Developer MERN</h4>
             <h4 className="school-name">Guvi IITM Research Park</h4>
              <h4 className='school-year'> Venue : Chennai</h4>
              <h4 className='school-venvue'>
              Year  : 2022
              </h4>
              <h5 className='education-percentagae'>
              <span className='mark-highlight'>Internship</span >
              </h5>
           </Box>
        </Paper>
        </Box>
</Box>
</div>
</Paper>
</Box>
</>)
}

export default Education



    