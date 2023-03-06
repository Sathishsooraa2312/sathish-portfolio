import React,{ useRef } from 'react'
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import {useFormik} from 'formik';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
function Contact() {
   const formValidationSchema=yup.object({
    user_name:yup.string().required(),
    user_phone:yup.string().required().min(10),
    user_email:yup.string().required().min(10),
    message:yup.string().required().min(9)
   })
  const {handleSubmit,values, handleChange,handleBlur,touched, errors}=useFormik ({
    initialValues:{
      user_name:"",
      user_phone:"",
      user_email:"",
      message:""
    },
    validationSchema:formValidationSchema,
    onSubmit:(e) => {
      sendEmail(e)
    }
  })
    const form = useRef();
  const sendEmail = (e) => {
    emailjs.sendForm(
        'service_hlu0r7z',
         'template_9bahlzn',
          form.current, 
          'jNbSQoSrPfhFfBgE7')
      .then((result) => {
          console.log(result.text);
          toast("I will reach you soon!!",{
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
         
      }, (error) => {
          console.log(error.text);
      });
    }
  return (<>
<Box sx={{padding:5}}  className="main-container">
<Paper elevation={12}>
  <Box sx={{padding:4}}>
    <h4 className='form-heading' id="Contact">Connect with Me...!!! Fill this form</h4>
    <Box className="form-largr-box" >
           <Box className="form-container" >
                 <Paper elevation={20}>
                    <Box >
                 <form  className="form-main" ref={form} onSubmit = {handleSubmit}>
      <TextField
      value={values.user_name}
       name="user_name"
       id="outlined-basic"
      label="Name"
      type="text"
      className="text-field"
      onBlur={handleBlur}
      onChange={handleChange}
      error = {touched.user_name && errors.user_name}
       helperText =  {touched.user_name && errors.user_name ? errors.user_name :null}
       sx={{marginTop:"20px"}}
       variant="outlined" />
      
      <TextField
      value={values.user_phone}
       name="user_phone"
       id="outlined-basic"
      label="Mobile no"
      type="string"
      className="text-field"
      onChange={handleChange}
      onBlur={handleBlur}
      sx={{marginTop:"20px"}}
      error = {touched.user_phone && errors.user_phone}
  helperText =  {touched.user_phone && errors.user_phone ? errors.user_phone :null}
       variant="outlined" />

      <TextField
      value={values.user_email}
       name="user_email"
       id="outlined-basic"
      label="Email"
      className="text-field"
      onBlur={handleBlur}
      type="email"
      onChange={handleChange}
      sx={{marginTop:"20px"}}
      error = {touched.user_email && errors.user_email}
  helperText =  {touched.user_email && errors.user_name ? errors.user_email :null}
       variant="outlined" />

      <TextField
      value={values.message}
       name="message"
       id="outlined-basic"
      label=" Message"
      type="text"
      className="text-field"
      onBlur={handleBlur}
      onChange={handleChange}
      sx={{marginTop:"20px"}}
      error = {touched.message && errors.message}
  helperText =  {touched.message && errors.message ? errors.message :null}
       variant="outlined" />
<Button sx={{marginTop:"20px",marginBottom:"20px",backgroundColor:"crimson"}}    type="submit" variant="contained">Submit</Button>
<ToastContainer />
    </form> 
    </Box>
                 </Paper>
           </Box>    
    </Box>
  </Box>
</Paper>
</Box>
  </>)
}

export default Contact