import { Box, Typography, IconButton, Stack } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export const Footer = () => {
    return (
        <Box
            sx={{
                height: { xs: '30vh', xl: '15vh' },
                backgroundColor: "#000",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                mt: 4
            }}
        >
            <Stack direction="row" spacing={3} sx={{ mb: 1 }}>
                <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/tuusuario"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: '#fff' }}
                >
                    <LinkedInIcon fontSize="large" />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://github.com/tuusuario"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: '#fff' }}
                >
                    <GitHubIcon fontSize="large" />
                </IconButton>
                <IconButton
                    component="a"
                    href="mailto:aggarcia997@gmail.com"
                    sx={{ color: '#fff' }}
                >
                    <EmailIcon fontSize="large" />
                </IconButton>
            </Stack>
            <Typography variant="body2" sx={{ color: '#fff', textAlign: 'center' }}>
                © 2025 Agustín García. Todos los derechos reservados.
            </Typography>
        </Box>
    );
};