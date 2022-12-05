import {makeStyles} from "@material-ui/core";
import Navbar from "./componentes/Navbar";
import About from "./componentes/About";
import Skills from "./componentes/Skills";
import MyWork from "./componentes/MyWork";
import Contact from "./componentes/Contact";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <Navbar/>
       <About  title="Perfil"  id="about" dark={true} className={classes.letra}/>
       <Skills title="Intereses"  id="skills" dark={false}/>
       <MyWork title="Sistema web's personal desarollados"  id="work" dark={true}/>
       <Contact title="Contacto"  id="contact" dark={false}/>

    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {   
     //fontStyle: "oblique",
  },
  letra: {   
    fontStyle: "oblique",
 },
 }
 ))
export default App;
