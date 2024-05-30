// import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
// import CircularProgress from '@mui/material/CircularProgress';
// import Stack from '@mui/material/Stack';
// import { useEffect, useState } from "react"; 
// import BasicStackAlumno from "../components/alumno/ItemsAlumno";
// import { useAlumnoStore } from "../store/StoreAlumno";

// const MostrarAlumnos = () => {
//   const { alumnos, getAlumnos, isLoading } = useAlumnoStore();
//  // const [showContent, setShowContent] = useState(false); // estado para controlar la visibilidad

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     await getAlumnos(); // Esperamos a que se carguen los alumnos
//   //     setTimeout(() => {
//   //         console.log('hola') // Mostramos el contenido después de 5 segundos
//   //       setShowContent(true);
//   //     }, 10000);
//   //   };

//   //   fetchData();
//   // }, [getAlumnos]);

//   return (
//     <div>
//       <Backdrop
//         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//         open={isLoading}
//       >
//         <CircularProgress color="inherit" />
//       </Backdrop>
//       {/* <Box sx={{ width: '100%', opacity: !showContent ? 0.5 : 1 }}> */}
//       <Box sx={{ width: '100%', opacity: !showContent ? 0.5 : 1 }}>
//         <Stack spacing={2}>
//           {alumnos.map((alumno: alumno) => (
//             <BasicStackAlumno key={alumno.id} alumno={alumno} />
//           ))}
//         </Stack>
//       </Box>
//     </div>
//   );
// }

// export default MostrarAlumnos;
