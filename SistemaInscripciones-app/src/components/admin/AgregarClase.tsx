import { Button, Container, Input, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { postStudents } from "../../services/alumnos-service";
import { postClase } from "../../services/clases-service";


export function AgregarClase() {


    const navigate = useNavigate()

   


    const agregarClase = (body: any) => {
        postClase(body)
    }

    const handleAgregarDB = (e: any) => {

        e.preventDefault();



        const formData = new FormData(e.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());
    
        agregarClase(formJson)
     

        navigate('/admin/mostrarClase')

    }

    return (
        <>
        <Container sx={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
            <form onSubmit={handleAgregarDB}>
                <Stack spacing={1}>
                    <Input placeholder="Nombre" name="nombre" />
                    <Input type='number' placeholder="100.00" name="costo" />
                    <Button type="submit" sx={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>Guardar</Button>
                </Stack>
            </form>
 

        </Container>


        </>
    )
}