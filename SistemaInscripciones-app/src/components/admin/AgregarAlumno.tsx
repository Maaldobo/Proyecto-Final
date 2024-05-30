import { Button, Container, Input, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { postStudents } from "../../services/alumnos-service";


export function AgregarEstudiante() {


    const navigate = useNavigate()

   


    const agregarEstudiante = (body: any) => {
        postStudents(body)
    }

    const handleAgregarDB = (e: any) => {

        e.preventDefault();



        const formData = new FormData(e.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());
        formJson.uuid = crypto.randomUUID()
        agregarEstudiante(formJson)
     

        navigate('/admin/mostrarAlumno')

    }

    return (
        <>
        <Container sx={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
            <form onSubmit={handleAgregarDB}>
                <Stack spacing={1}>
                    <Input placeholder="Nombre" name="nombre" />
                    <Input placeholder="Apellido" name="apellido" />
                    <Button type="submit" sx={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>Guardar</Button>
                </Stack>
            </form>
 

        </Container>


        </>
    )
}