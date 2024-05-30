import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import MenuBar from "../components/MenuBar";



function RootLayout(){
    
    return(
      
        <Container >
        <MenuBar></MenuBar>
        <br />
        <Outlet></Outlet>
        </Container>
    
    )
}
export default RootLayout