import * as React from 'react';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Img from '../images/image1.jpg'
function About() {
  return (<>
    
<Box sx={{padding:5}} className="main-container">
<Paper elevation={12}>
<div  className="about-box">
  <div className="image-box">
< img 
src={Img}
className="about-image"
alt='sathish kumar'
/>
</div>
<Box className="about-container" id="About">
    <div className="name-box">
<h6  className="my-name"style={{fontSize:"30px",margin:"10px 0px",fontFamily:"tahoma",color:"gray"}}>Hi I'm Sathish kumar</h6> 
           <h6 className="course-name" style={{fontSize:"30px",margin:"10px 0px",fontFamily:"tahoma",color:"crimson"}}>Full Stack MERN Developer</h6>
           </div>
  <p className="about-para">Strong in design and integration with intuitive problem-solving skills.
     Proficient in Java script, React,Node.js. Passionate about implementing and launching new projects. 
     Ability to translate business requirements into technical solutions. 
    Looking to start the career as an entry-level full stack Developer with a reputed firm driven by technology.</p>
    <div  className="mail-box">
        <Box >
    <p style={{fontSize:"18px",margin:"10px 0px",fontWeight:700}}>sathishrohin22@gmail.com <EmailIcon /></p>
     <p style={{fontSize:"18px",margin:"0px 0px 25px 0px",fontWeight:600}}>8489980547 <CallIcon /></p>
     </Box>
     <div className="icon-box">
     <a className='text' href="https://github.com/Sathishsooraa2312"><GitHubIcon sx={{width:"40px",height:"40px",color:"crimson"}}/></a>
      <a className='text' href="https://www.linkedin.com/in/sathish-kumar-23938a256/"><LinkedInIcon sx={{color:"crimson",width:"40px",height:"40px"}}/></a>
      <a className='text' href="https://app.netlify.com/teams/sathishsooraa2312/overview"> 
      <img src="https://static-00.iconduck.com/assets.00/netlify-icon-511x512-idkvcd89.png" alt="netlify" className='netlify-image' />
      </a>
      <Box >
        <a className='anchor' href="https://drive.google.com/file/d/1zj82t996BVo9Hsb3DeJgx_j3xjny7bMZ/view?usp=share_link"><button className="cv-button" >Visit My CV</button></a>
        </Box>
     </div>
     </div>
</Box>
</div>
</Paper>
</Box>

    </>)
}

export default About