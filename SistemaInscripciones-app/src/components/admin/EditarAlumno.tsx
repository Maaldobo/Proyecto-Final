import { useLocation, useNavigate } from "react-router-dom"
import { getAlumnoByID, putStudents } from "../../services/alumnos-service"
import { Button, Container, Input, Stack } from "@mui/material"
import { useEffect, useState } from "react"

function EditarAlumno(){
    const location = useLocation();
     const { id } = location.state
    
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

    const editarEstudiante = async (id: string, body: any) => {
        try {
            await putStudents(id, body)

        } catch (error) {
            console.error('Error actualizando estudiante:', error)
        }
    }

    const handleAgregarDB = async (e: any) => {

        e.preventDefault()



        const formData = new FormData(e.currentTarget)
        const formJson = Object.fromEntries((formData as any).entries())
        await editarEstudiante(id,formJson)
     
        
            navigate('/admin/mostrarAlumno')
            
    

    }

    return (
        <>
        <Container sx={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
            <form onSubmit={handleAgregarDB}>
                <Stack spacing={1}>
                    <Input  placeholder={userInfo?.nombre} name="nombre" />
                    <Input  placeholder={userInfo?.apellido}  name="apellido" />
                    <Button type="submit" sx={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>Actualizar</Button>
                </Stack>
            </form>
 

        </Container>


        </>
    )
}
export default EditarAlumno