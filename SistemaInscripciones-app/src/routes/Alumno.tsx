import { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom"
import { getAlumnoByUUID } from "../services/alumnos-service"
import MenuAlumno from "../components/alumno/MenuAlumno"

function Alumno(){

    const user = useParams()
    const[userInfo, setUserInfo]=useState<alumno|null>(null)

    useEffect(()=>{
        loadData()
    },[])

    const loadData = async ()=>{
        const data = await getAlumnoByUUID(user.uuid||"")
        setUserInfo(data[0])
        console.log(data)
    }   

    return(
        
        <>
        <p>Alumno: {userInfo?.nombre+' '}{userInfo?.apellido}  </p>
        <MenuAlumno></MenuAlumno>
        <Outlet></Outlet>
        
    </>
)
    }
export default Alumno