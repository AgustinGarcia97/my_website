import {Box, Divider, Link, List, ListItem, Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import type { FC } from 'react';

interface Project {
    project_title: string;
    link: string;
    description: string;
    technologies: string[];
    project: string;
    state: string;
}

interface ListProjectsProps {
    projects: Project[];
    descriptionLang: string;
    technologiesLang: string;
}

export const ListProjects: FC<ListProjectsProps> = ({projects, descriptionLang, technologiesLang}) => {
    return (
        <List
            sx={{
                fontFamily:"'Lato Black',sans-serif",
                display:'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems:'center',
                gap:'20px',
                width: '100%',
                padding: 0
            }}>
            {projects.map((project: Project, index: number) => (
                <ListItem sx={{
                    ...list_item_style.listItem
                }} key={index}>

                    <Box sx={{...list_item_style.description_box,}}>
                        <Typography sx={{

                            ...list_item_style.typography,
                            fontSize:{xs:'20px',sm:'26px',md:'',lg:'26px',xl:'22px'},
                        }}>{project.project_title}</Typography>
                        <Divider sx={{backgroundColor:'#888686',width: {xs:'90vw',sm:"55vw", lg:"30vw",xl:'30vw'}, marginTop:'10px'}}></Divider>

                    </Box>

                    <Box sx={{...list_item_style.description_box,}}>
                        <Typography sx={{...list_item_style.typography, fontSize:{xs:"14px",sm:"19px",lg:"19px",xl:"17px"}}}>{descriptionLang}:{project.description}</Typography>
                    </Box>

                    <Box sx={{...list_item_style.technologies_box}}>
                        <Typography sx={{
                            ...list_item_style.typography,
                            fontSize:{xs:'17px',sm:'17px',md:'',lg:'20px',xl:'18px'},


                        }}>{technologiesLang}:</Typography>
                        <List sx={{...list_item_style.technologies_list}}>
                            {project.technologies.map((technology: string, index: number) => (
                                <>

                                    <ListItem sx={{...list_item_style.techno_list_item,
                                        padding: {xs:"2px",xl:'8px'},
                                        paddingTop:{xs:"1px",xl:'2px'},
                                        paddingBottom:{xs:"1px",xl:'2px'},
                                        width:'auto'}} key={index} >
                                        <Typography
                                            sx={{
                                                fontFamily:"'Lato Black',sans-serif",
                                                color:'#d5cfcf',
                                                textAlign:'center',
                                                fontSize:{xs:'11px',sm:'14px',md:'',lg:'',xl:'11px'},
                                            }}>
                                            {technology}
                                        </Typography>

                                    </ListItem>
                                </>
                            ))}
                        </List>
                    </Box>

                    <Box sx={{
                        ...list_item_style.technologies_box,
                        width: '100%',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <Typography
                            sx={{
                                ...list_item_style.technologies_list,
                                width: 'auto',
                                fontSize: { xs: '14px', sm: '16px', lg: '16px', xl: '' },
                                whiteSpace: 'normal',
                                wordBreak: 'break-word',
                                flexShrink: 0,
                            }}
                        >
                            Link:
                        </Typography>
                        <GitHubIcon sx={{ ml: 1, color: '#fff', fontSize: 22 }} />
                        <Link
                            sx={{
                                width: '50%',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                ml: 1,
                            }}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {project.link}
                        </Link>
                    </Box>

                </ListItem>
            ))}
        </List>
    )
}
const list_item_style = {
    listItem:{
        display:'flex',
        width: {xs:'100%', sm:'65vw', md:'100%', lg:'40vw', xl:'35vw'},
        height:{xs:'auto', sm:'auto', md:'auto', lg:'auto', xl:'auto'},
        flexDirection:'column',
        background: 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(16px)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        padding:{xs:'20px',sm:'25px',md:'25px',lg:'25px',xl:'30px'},
        borderRadius:'20px',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        gap:{xs:'15px',sm:'15px',md:'15px',lg:'15px',xl:'20px'},
        transition: 'all 0.3s ease-in-out',
        margin: {xs: '0 auto', sm: '0 auto', md: '0 auto', lg: '0 auto', xl: '0'},
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.45)',
        }
    },
    description_box:{
        width: {xs:"80vw",sm:"60vw", lg:'37vw',xl:'33vw'},
        display:'flex',
        flexDirection:'column',
        gap: '10px'
    },
    technologies_box:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:"rgba(0,0,0,0.29)",
        padding:'10px',
        alignItems:'center',
        width:'100%',
        gap:'15px',
        borderRadius:'8px',


    },
    technologies_list:{
        display:'flex',
        width:{xs:'100%',sm:'100%',md:'100%',lg:'100%',xl:'40vw'},
        flexDirection:'row',
        color:'#e3e3e3',
        gap:'8px',
        flexWrap: 'wrap'
    },
    techno_list_item:{
        backgroundColor:'rgba(94, 94, 94, 0.7)',
        fontFamily:"'Lato Black',sans-serif",
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'8px',
        color:'#e3e3e3',
        border:'1px solid rgba(255, 255, 255, 0.18)',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
            backgroundColor:'rgba(94, 94, 94, 0.9)',
            transform: 'scale(1.05)'
        }
    },
    typography:{
        fontFamily:"'Lato Black',sans-serif",
        color:'#e3e3e3',
        textShadow: '0 2px 4px rgba(0,0,0,0.2)',
        backgroundColor:"rgba(0,0,0,0.29)",
        padding: {xs:'20px',xl:'10px'},

        borderRadius:'8px',
    }
}