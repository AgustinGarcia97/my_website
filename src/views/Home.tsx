import {Box} from '@mui/material';
import Grid from "@mui/material/Grid";
import {home} from "../styles/styles.ts";
import {MainTitle} from "../components/home/MainTitle.tsx";
import {About} from "../components/about/About.tsx";
import { Skills} from "../components/experience/Skills.tsx";
import {Projects} from "../components/projects/Projects.tsx";

import {DialogCard} from "../components/experience/DialogCard.tsx";


import { ContactDialog } from '../components/contact/ContactDialog.tsx';



export const Home = () => {

    return (
        <Box id="home" sx={{ ...home.box }}>
            <Grid container spacing={2} sx={{display:"flex",justifyContent:"center"}} >

                <Grid size={{ xs: 12, md: 8, xl:12 }} sx={{...home.grid.grid_item, ...home.grid.grid_item_first}} >
                    <MainTitle/>
                </Grid>


                <Grid size={{ xs: 12, md: 6, xl:12 }} sx={{...home.grid.grid_item}}  id="about">
                    <About/>
                </Grid>


                <Grid size={{ xs: 12, xl:12 }} sx={{...home.grid.grid_item,  }} id="skills">
                    <Skills/>
                </Grid>

                <Grid size={{ xs: 12, xl:12 }} sx={{...home.grid.grid_item}} id="projects">
                    <Projects/>
                </Grid>


            </Grid>
            <DialogCard/>
            <ContactDialog/>
        </Box>
    );
};

