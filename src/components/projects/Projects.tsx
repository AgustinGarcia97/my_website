import {Box,  Typography} from "@mui/material";
import {home} from "../../styles/styles.ts";
import {home_data} from "../../data/WebSiteData.ts";
import {useSelector} from "react-redux";
import type {RootState} from "../../redux/store.ts";
import {ListProjects} from "./ListItem.tsx";
import {Pagination, Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import 'swiper/css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/pagination";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/navigation";

export const Projects = () => {
    const language = useSelector((state: RootState) => state.languageSelector.switchTo);
    const projects = home_data[language].my_projects.frontend_projects;
    const backend_projects = home_data[language].my_projects.backend_projects;
    const infra_projects = home_data[language].my_projects.infrastructure_projects;
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
                {projects_sections.map((section) => (
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