import { Box } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

//dentro do layout, vai receber outros componentes react
export default function Layout({children} : {children: React.ReactNode}) {
  return (
    <Box>
        <Container maxWidth="lg" sx={{mt: 4, mb:4, color:"white"}}>
        {children}
        </Container>
    </Box>
    )
}
