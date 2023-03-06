import './App.css';
import Skills from './components/Skills'
import About from './components/About'
import Education from './components/Education'
import Contact from './components/Contact'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Button from '@mui/material/Button';
import {useState} from 'react';
import Project from './components/Project';
import AnchorLink from "react-anchor-link-smooth-scroll-v2";


function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = (event) => {
    setAnchorElNav(event.target.value);
    console.log(event.target.value);
  };
  const [mode ,setMode]=useState('dark')
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <Paper sx={{minHeight : "100vh"}} elevation={4} >
    <>
    <AppBar position="static" sx={{backgroundColor:"crimson"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
       
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Sathish kumar
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             
             <AnchorLink href="#About" className="text-box">
                  <Typography sx={{padding:"5px"}} textAlign="center">About</Typography>
                </AnchorLink>
                <AnchorLink href="#Education" className="text-box">
                  <Typography sx={{padding:"5px"}} textAlign="center">Education</Typography>
                </AnchorLink>
                <AnchorLink href="#Project" className="text-box">
                  <Typography  sx={{padding:"5px"}} textAlign="center">Project</Typography>
                </AnchorLink>
                <AnchorLink href="#Skills" className="text-box">
                  <Typography sx={{padding:"5px"}} textAlign="center">Skills</Typography>
                </AnchorLink>
                <AnchorLink  href="#Contact" className="text-box">
                  <Typography sx={{padding:"5px"}} textAlign="center">Contact</Typography>
                </AnchorLink>
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            className="profile-name"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 1000,
              letterSpacing: '.1rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Sathish Kumar
          </Typography>
          <Button  
          className="mode-button"
        sx={{marginLeft:"auto", color:"black"}}
        startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        onClick={()=>setMode( mode==="light"?"dark":"light")}
        color="inherit"> </Button>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } ,justifyContent:"flex-end"}}>
            
          <AnchorLink href="#About" className="text-box">
                  <Typography textAlign="center">About</Typography>
                </AnchorLink>
                <AnchorLink href="#Education" className="text-box">
                  <Typography textAlign="center">Education</Typography>
                </AnchorLink>
                <AnchorLink href="#Project" className="text-box">
                  <Typography textAlign="center">Project</Typography>
                </AnchorLink>
                <AnchorLink href="#Skills" className="text-box">
                  <Typography textAlign="center">Skills</Typography>
                </AnchorLink>
                <AnchorLink href="#Contact" className="text-box">
                  <Typography textAlign="center">Contact</Typography>
                </AnchorLink>
           
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
    <About />
    <Education />
    <Skills />
    <Project />
    <Contact />
    </>
    </Paper>
    </ThemeProvider>
    
  );
}

export default App;
