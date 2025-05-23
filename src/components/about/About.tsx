import {Box, IconButton, Typography} from "@mui/material";
import {home} from "../../styles/styles.ts";
import {home_data} from "../../data/WebSiteData.ts";
import { useSelector } from "react-redux";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import profileImg from '../../assets/img/img.jpg';
import type {RootState} from "../../redux/store.ts";


export const About = () => {
    const language = useSelector((state: RootState) => state.languageSelector.switchTo);
    const title = home_data[language].about_me.title;
    const description = home_data[language].about_me.text;
    const text = description.split("\n");
    return (
        <Box sx={{...home.about_me.box}}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>

            </Box>
            <Typography sx={{...home.about_me.title}}>
                {title}
            </Typography>
            <Box
                sx={{
                    width: {xs:300,sm:350,md:400,lg:400,xl:400},
                    height: {xs:300,sm:350,md:400,lg:400,xl:400},
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '5px solid #fff',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    borderColor:'#616060',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#eee',
                    mx: 'auto',
                }}
            >
                <img
                    src={profileImg}
                    alt='Foto de perfil'
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', objectPosition: 'center 30%' }}
                />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <IconButton
                        component="a"
                        href="https://www.linkedin.com/in/tuusuario"
                        target="_blank"
                        rel="noopener"
                        sx={{
                            bgcolor: '#0A66C2',
                            color: '#fff',
                            borderRadius: '50%',
                            width: 60,
                            height: 60,
                            '&:hover': { bgcolor: '#004182' }
                        }}
                    >
                        <LinkedInIcon sx={{fontSize:35}} />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://github.com/tuusuario"
                        target="_blank"
                        rel="noopener"
                        sx={{
                            bgcolor: '#333',
                            color: '#fff',
                            borderRadius: '50%',
                            width: 60,
                            height: 60,
                            '&:hover': { bgcolor: '#000' }
                        }}
                    >
                        <GitHubIcon sx={{fontSize:35}} />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="mailto:aggarcia997@gmail.com"
                        sx={{
                            bgcolor: '#EA4335',
                            color: '#fff',
                            borderRadius: '50%',
                            width: 60,
                            height: 60,
                            '&:hover': { bgcolor: '#B23121' }
                        }}
                    >
                        <EmailIcon sx={{fontSize:35}}/>
                    </IconButton>
                </Box>
            </Box>


            {
                text.map((item, i) => (
                    <Typography key={i} sx={{...home.about_me.text}}>{item} </Typography>
                ))
            }


        </Box>
    );
};