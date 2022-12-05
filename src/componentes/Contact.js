import React, { useState } from 'react'
import {Button, makeStyles, Paper, Radio, TextField, Typography} from "@material-ui/core";
import emailjs from '@emailjs/browser';

const Contact = ({title, dark, id}) => {
    const classes = useStyles();
    const [value, setValue] = useState ("Say Hi")

    const handleChange = (e) => {
      setValue(e.target.value)
    }

    function sendMail() {
      var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };
    
      const serviceID = "service_8a9bsey";
      const templateID = "template_s37720h";
    
        emailjs.send(serviceID, templateID, params)
        .then(res=>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully!!")
    
        })
        .catch(err=>console.log(err));
    
    }

  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
           <div className={classes.sectioncontent} id={id}>
          <Typography variant="h4" >{title} </Typography>
          <Paper className={classes.root}>
            <div className={classes.titleandchoices} >
            <Typography variant="h5" >Contactarme</Typography>
            <div className={classes.choices} >
            <span> Say Hello </span>
             <Radio 
             value="Say Hi"
              checked={value === "Say Hi"}
              color="primary"
              onChange={handleChange}
             />
               <span>Mas Detalles </span>
              <Radio 
             value="Mas Detalles "
              checked={value === "Mas Detalles"}
              color="primary"
              onChange={handleChange}
             />
            </div>
            <script
            type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
          ></script>
            </div>
            <form className={classes.form} noValidate autoComplete='off'>
            <TextField label="Su Nombre"  type="text" className="form-control" id="name" placeholder="Enter name"/>
            <TextField label="Su Correo" type="email" className="form-control" id="email" placeholder="Enter email"/>
            {
              value === "Mas Detalles" ? (
              <>
                <TextField label="Needed Services"/>
                <TextField label="Estimated Budget"/>
              </>
              ) : null
            }
              <TextField label="Digite un Mensaje" className="form-control" id="message" minRows="9" placeholder="Enter message"/>
             </form>
             <Button className="btn btn-primary" onClick={sendMail}>Enviar </Button>

           </Paper>
        </div>
    </div>
  )
}

(function () {
  emailjs.init("ppMv7_H4v0w2KwKHJ");
})();

const useStyles = makeStyles((theme) => ({
    section: {     
        minHeight: "100vh", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    },   
    sectiondark: {
        background: "#333",
        color: "#fff",
     },
     root:{
        marginTop: theme.spacing(4),
        background: "tomato",
        color: "#fff",
        fontSize: "1.2rem",
        maxWidth: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: theme.spacing(4),
        "& button":{
          backgroundColor: "#fff",
          color: "tomato",
          fontWeight: 900,
          fontSize: "1.2rem",
          marginTop: theme.spacing(4)
       },
       "& button:hover":{
         backgroundColor: "#fff",
         color: "fff",
      }


     },

     sectioncontent:{
       maxWidth: "80vw",
       //border: "2px solid red"
       padding: theme.spacing(2),
     },
     titleandchoices:{
         "& h5":{
            marginTop: theme.spacing(4),
         }

     },
   }
   ))


export default Contact