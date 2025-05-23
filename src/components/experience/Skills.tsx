import {List, ListItem, Typography} from "@mui/material";
import {home, skills_style} from "../../styles/styles.ts";
import Grid from "@mui/material/Grid";
import {useSelector} from "react-redux";
import type {RootState} from "../../redux/store.ts";
import {
    home_data,
    skill_cards_data_backend,
    skill_cards_data_frontend,
    skill_cards_data_infraestructure
} from "../../data/WebSiteData.ts";
import {SkillCard} from "./SkillCard.tsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Box from '@mui/material/Box';

export const Skills = () => {
    const language = useSelector((state: RootState) => state.languageSelector.switchTo);
    const title = home_data[language].skills.title;
    const titleF = home_data[language].my_projects.subtitleF;
    const titleB = home_data[language].my_projects.subtitleB;
    const titleI = home_data[language].my_projects.subtitleI;

    const skills_sections = [
        {
            title: titleB,
            skills: skill_cards_data_backend
        },
        {
            title: titleF,
            skills: skill_cards_data_frontend
        },
        {
            title: titleI,
            skills: skill_cards_data_infraestructure
        }
    ];

    return (
        <Grid container sx={{display:'flex', justifyContent: 'center', flexDirection:'column'}}>
            <Grid item xs={12}>
                <Typography sx={{...home.about_me.title}}>{title}</Typography>
            </Grid>
            <Grid item xs={12} sx={{width: '100%', maxWidth: '1200px', margin: '0 auto'}}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    style={{width: '100%', minHeight: '350px'}}
                >
                    {skills_sections.map((section) => (
                        <SwiperSlide key={section.title}>
                            <Box sx={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                py: 2
                            }}>
                                <Typography sx={{...home.grid.subtitle, fontSize: {xs:'24px', sm:'28px', lg:'32px', xl:'36px'}, mb: 2}}>
                                    {section.title}
                                </Typography>
                                <List sx={{...skills_style.list, width: '100%', justifyContent: 'center'}}>
                                    {section.skills.map((skill, index) => (
                                        <ListItem key={index} sx={{width:"auto"}}>
                                            <SkillCard skill={skill}/>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Grid>
        </Grid>
    );
};