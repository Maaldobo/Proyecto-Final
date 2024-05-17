import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import MenuAppBar from "../components/MenuAppBar";
import { useEffect } from "react";
import { useAlumnoStore } from "../store/StoreAlumno";



function RootLayout(){
    const { alumnos, getAlumnos } = useAlumnoStore()
    useEffect(() => {
        getAlumnos();
        console.log(alumnos) 
      }, [])
    return(
      
        <Container >
        <MenuAppBar></MenuAppBar>
        <br />
        <Outlet></Outlet>
        </Container>
    
    )
}
export default RootLayout