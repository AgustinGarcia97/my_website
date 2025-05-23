import {Home} from "../views/Home.tsx";

import { Box } from "@mui/material";

export const RoutestList = () => {
    return(
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '100px', // Espacio entre secciones
            paddingTop: '80px', // Espacio para el navbar
            minHeight: '100vh',
            scrollBehavior: 'smooth'
        }}>
            <Home/>

        </Box>
    )
}