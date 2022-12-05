import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

import xempresa from "../images/xempresa.png";
import it from "../images/it.png";
import restaurantes from "../images/restaurantes.png";
import datos from "../images/datos.png";
import mariscos from "../images/mariscos.png"; 
const mockData = [
  {
     title: "X Empresa",
     image: xempresa,
     link: "https://xempresa-2022.up.railway.app/"
  },
  {
    title: "IT Dispositivos",
    image: it,
    link: "https://itdispositivos-2022.up.railway.app/"
 },
 {
    title: "Restaurante",
    image: restaurantes,
    link: "https://restaurantes-2022.up.railway.app/"
 },
 {
   title: "Mariscos",
   image: mariscos,
   link: "https://mariscos-2022.up.railway.app/"
},
 {
    title: "Muestra de Datos",
    image: datos,
    link: "https://app-training2023.herokuapp.com/"
 },
];

export default mockData;