import { Button, Container, Input, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getClaseByID, putClase } from "../../services/clases-service";

function EditarClase(){
    const location = useLocation();
     const { id } = location.state
    
    const[claseInfo, setClaseInfo]=useState<clase|null>(null)

    useEffect(()=>{
        loadData()
    },[])

    const loadData = async () => {
        try {
            const data = await getClaseByID(id)
            setClaseInfo(data[0])
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    const navigate = useNavigate()

    const editarClase = async (id: string, body: any) => {
        try {
            await putClase(id, body)

        } catch (error) {
            console.error('Error actualizando estudiante:', error)
        }
    }

    const handleAgregarDB = (e: any) => {

        e.preventDefault()



        const formData = new FormData(e.currentTarget)
        const formJson = Object.fromEntries((formData as any).entries())
        editarClase(id,formJson)
     
        setTimeout(() => {
            navigate('/admin/mostrarClase')
            
        }, 3000);

    }

    return (
        <>
        <Container sx={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
            <form onSubmit={handleAgregarDB}>
                <Stack spacing={1}>
                    <Input  placeholder={claseInfo?.nombre} name="nombre" />
                    <Input  placeholder={claseInfo?.costo}  name="costo" />
                    <Button type="submit" sx={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>Actualizar</Button>
                </Stack>
            </form>
 

        </Container>


        </>
    )
}
export default EditarClase