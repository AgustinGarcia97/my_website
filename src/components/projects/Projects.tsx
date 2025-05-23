import {Box, Divider, Link, List, ListItem, Typography} from "@mui/material";
import {home} from "../../styles/styles.ts";
import Grid from "@mui/material/Grid";
import {home_data} from "../../data/WebSiteData.ts";
import {useSelector} from "react-redux";
import type {RootState} from "../../redux/store.ts";
import {ListProjects} from "./ListItem.tsx";
import {Pagination, Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Projects = () => {
    const language = useSelector((state: RootState) => state.languageSelector.switchTo);
    const projects = home_data[language].my_projects.frontend_projects;
    const backend_projects = home_data[language].my_projects.backend_projects;
    const infra_projects = home_data[language].my_projects.infrastructure_projects;
    const projectLang =home_data[language].my_projects.project;
    const title =home_data[language].my_projects.project;
    const descriptionLang =home_data[language].my_projects.description;
    const technologiesLang = home_data[language].my_projects.technologies;
    const titleF = home_data[language].my_projects.subtitleF;
    const titleB = home_data[language].my_projects.subtitleB;
    const titleI = home_data[language].my_projects.subtitleI;

    const projects_sections = [
        {
            title:titleB,
            projects:backend_projects,
            technologiesLang:technologiesLang,
            descriptionLang:descriptionLang,
        },
        {
            title:titleF,
            projects:projects,
            technologiesLang:technologiesLang,
            descriptionLang:descriptionLang,
        },
        {
            title:titleI,
            projects:infra_projects,
            technologiesLang:technologiesLang,
            descriptionLang:descriptionLang,
        },
    ];

    return (
        <>
            <Typography sx={{...home.about_me.title,fontSize: {xs:"45px",sm:"",lg:"50px",xl:'50px'}}}>{title}</Typography>
            <Swiper
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true }}

                spaceBetween={30}
                slidesPerView={1}
                navigation={{ enabled: true }}
                style={{ paddingBottom: 40, width: '100%', margin: '0 auto', minHeight:"auto",}}
            >
                {projects_sections.map((section, idx) => (
                    <SwiperSlide key={section.title}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: "center",
                            padding: {xs: '0px', sm: '20px', md: '20px', lg: '20px', xl: '0'},
                            width: '100%',
                            margin: '0 auto',
                            gap: '40px',
                        }}>
                            <Box sx={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent:'center',
                                gap:'20px'
                            }}>
                                <Typography
                                    sx={{...home.about_me.title,
                                        fontSize: {xs:"30px",sm:"40px",lg:"40px",xl:'50px'}
                                }}>
                                    {section.title}
                                </Typography>
                                <ListProjects
                                    projects={section.projects}
                                    technologiesLang={section.technologiesLang}
                                    descriptionLang={section.descriptionLang}
                                />
                            </Box>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

const list_item_style = {
    listItem:{
        display:'flex',
        width: {xs:'100%', sm:'100%', md:'100%', lg:'100%', xl:'53vw'},
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
        width:'100%',
        display:'flex',
        flexDirection:'column',
        gap: '10px'
    },
    technologies_box:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        gap:'15px',
        flexWrap: 'wrap'
    },
    technologies_list:{
        display:'flex',
        width:{xs:'100%',sm:'100%',md:'100%',lg:'100%',xl:'35vw'},
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
        textShadow: '0 2px 4px rgba(0,0,0,0.2)'
    }
}