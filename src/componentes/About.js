import React from 'react'
import {Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
import WhatsApp from "../images/WhatsApp.png"
import TypeWriterEffect from 'react-typewriter-effect';

const About = ({title, dark, id}) => {
    const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
          
          <div className={classes.sectioncontent} id={id}>
          <Typography variant="h3" >{title} </Typography>
          <Card className={classes.card}>
              
            <CardMedia image={WhatsApp} className={classes.media} title="picture"/>
           <CardContent className={classes.cardcontent}>

           <TypeWriterEffect
            text="            
            Hi, I am Sergio Castillo"
            textStyle={{ fontSize: "2rem", fontWeight: "700px", color: "tomato" }}
            startDelay={100}
            cursorColor="white"
            typeSpeed={100}
            />    
             <Typography variant="h6"></Typography>
           <TypeWriterEffect
            text="Perfil"
            textStyle={{ fontSize: "1.2rem", fontWeight: "500px", color: "black" }}
            startDelay={2500}
            cursorColor="white"
            typeSpeed={100}
            /> 
            <h2></h2>
           <TypeWriterEffect
            text="            
            Una persona responsable con facilidad de adaptación y capacidad de trabajar en equipo 
            en condiciones de presión con iniciativa para resolver problemas y lograr las metas y objetivos trazados por la empresa."
            textStyle={{ fontSize: "1.2rem", fontWeight: "500px", color: "black" }}
            startDelay={3500}
            cursorColor="white"
            typeSpeed={100}
            /> 

             <Typography variant="h6"></Typography>

            <h2></h2>
            <TypeWriterEffect
            text="Objetivo Profesional "
            textStyle={{ fontSize: "1.2rem", fontWeight: "500px", color: "black" }}
            startDelay={29900}
            cursorColor="white"
            typeSpeed={100}
            /> 
             <h2></h2>
           
            <TypeWriterEffect
            text="Poner en práctica todos los conocimientos adquiridos durante este proceso universitario y poder formar parte de 
            un equipo de trabajo que me permita desarrollarme personal y profesionalmente."
            textStyle={{ fontSize: "1.2rem", fontWeight: "400px", color: "black" }}
            startDelay={39900}
            cursorColor="white"
            typeSpeed={100}
            /> 
              
          </CardContent>
          <CardActions>
       
           </CardActions>
          </Card>
          </div>
        </div>
  )

}


const useStyles = makeStyles((theme) => ({
    section: {     
        minHeight: "100vh", 
    },   
    sectiondark: {
        background: "#333",
        color: "#fff",
     },
     sectioncontent: {
       maxWidth: "80vw",
       margin: "0 auto",

     },

     card: {
             height: "70vh",
             display: "flex",
             marginTop: theme.spacing(6),
             position: "relativa",
           
     },

     media: {
      width: "250px",
      height: "auto",
      objectFit: "cover",
      borderRadius: "10px",
      margin: theme.spacing(5) 
      

     },
     cardcontent: {
      marginTop: theme.spacing(2),
      "& h6": {
        marginTop: theme.spacing(2),
        [theme.breakpoints.down("sm")]:{
          display:"none",
    },
  },

     },
     

     pdfbutton: {
        position: "absolute",
        bottom: "2rem",
        right: "12rem",
        [theme.breakpoints.down("sm")]:{
          bottom: "-5rem",
          right: "3rem",
      },
        backgroundColor: "tomato",
        padding: theme.spacing(3),

        "&:hover": {
          backgroundColor: "#fff",
      },
      "&:a": {
        color: "#fff",
        textDecoration: "none",
        fontWeight: 900,
    },
    "&:a:hover": {
      color: "#tomato",
    }

     },
   }
   ))


export default About