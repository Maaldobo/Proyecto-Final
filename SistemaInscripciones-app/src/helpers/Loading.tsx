import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'

export default function SimpleBackdrop() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(true)
    const timer = setTimeout(() => {
      setOpen(false)
    }, 5000) 
    return () => clearTimeout(timer) //quitar en cuanto se cargue
  }, [])

  return (
   
      <Box sx={{ position: 'relative', height: '200px', width: '200px', border: '1px solid black', marginTop: '20px' }}>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, position: 'absolute' }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>

      </Box>

  )
}