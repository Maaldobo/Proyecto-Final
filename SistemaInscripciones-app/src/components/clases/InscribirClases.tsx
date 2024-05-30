import { useLocation, useNavigate } from "react-router-dom"
import { getAlumnoByID, putStudents } from "../../services/alumnos-service"
import { Button, Container, Input, Stack } from "@mui/material"
import { useEffect, useState } from "react"
import TransferList from "../../helpers/ListaClases";

function InscribirClase(){
    const location = useLocation();
     const { id } = location.state
     const { idClase } = location.state
    
    const[userInfo, setUserInfo]=useState<alumno|null>(null)

    useEffect(()=>{
        loadData()
    },[])

    const loadData = async () => {
        try {
            const data = await getAlumnoByID(id)
            setUserInfo(data[0])
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    const navigate = useNavigate()




    

    return (
        <>

            <TransferList></TransferList>
 



        </>
    )
}
export default InscribirClase