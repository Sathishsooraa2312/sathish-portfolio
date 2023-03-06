import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

// https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg
function Skills() {
    const skilldata=[{
        image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        skillname:"java Script"
    },{
        image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        skillname:"Bootstrap"
    },{
        image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        skillname:"HTML5"
    },{
        image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        skillname:"CSS3"
    },{
        image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        skillname:"React Js"
    },{
        image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        skillname:"Node.js"
    },{
        image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        skillname:"Express"
    },{
        image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        skillname:"mongoDb"
    },{
        image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        skillname:"vs code"
    },{
        image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        skillname:"Git"
    },
    {
        image:"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png",
        skillname:"Post man"
    },
    {
        image:"https://cdn.iconscout.com/icon/free/png-256/netlify-3628945-3030170.png",
        skillname:"Netlify"
    },
    
]
  return (<>
    <Box sx={{ padding:5}}  className="main-container">
     <Paper elevation={20}>
        <Box sx={{padding:4}}>
    <h6 id="Skills" style={{fontSize:"20px",textAlign:"center",margin:"0px 0px 10px 0px",color:"crimson"}}>Skills & Tools </h6>
        <Box className="skillBox-container" >
         {skilldata.map((data)=>(
         <SkillBox skilldata={data}/>
         ))}
        
         </Box>
    </Box>
    </Paper>
    </Box>
    </>
  )
}

function SkillBox({skilldata}){
    
    return(<>
         <Box  className="skillbox">
            <Paper elevation={20}>
                 <Box sx={{height:"100px",width:"100px"}} className="skillbox-details">
                    <img src={skilldata.image} alt="kkkk" className='skill-image'/>
                    <h4 className='skill-name'>{skilldata.skillname}</h4>
                 </Box>
            </Paper>
         </Box>
    </>)
}

export default Skills