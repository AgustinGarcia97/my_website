import { Typography, TextField, Button, Box, Grid } from "@mui/material";
import {home} from "../../styles/styles.ts";
import {useSelector, useDispatch} from "react-redux";
import type {RootState} from "../../redux/store.ts";
import {home_data} from "../../data/WebSiteData.ts";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { openSkillDialog } from "../../redux/reducers/drawerSlice.ts";

export const Contact = () => {
    const language = useSelector((state: RootState) => state.languageSelector.switchTo);
    const form_title = home_data[language].contact.form_title;
    const title = home_data[language].contact.title;
    const first_input = home_data[language].contact.first_input;
    const second_input = home_data[language].contact.second_input;
    const third_input = home_data[language].contact.third_input;
    const submit = home_data[language].contact.submit;
    const form = useRef<HTMLFormElement>(null);
    const dispatch = useDispatch();

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;
        emailjs.sendForm(
            'service_p7e0ekm',
            'template_euif03f', 
            form.current,
            '3SRFJ0Ubquzm2qBmi'
        )
        .then(() => {
            alert('¡Mensaje enviado!');
            form.current?.reset();
            dispatch(openSkillDialog({}));
        }, () => {
            alert('Error al enviar el mensaje');
        });
    };

    return (
        <Box
            sx={{
                ...home.contact.box_container,
                flexDirection:'column'

            }}
        >
            <Typography sx={{...home.grid.subtitle}}>{title}</Typography>

            <Box
                sx={{
                    ...home.contact.box_form,
                }}
            >
                <Typography
                    variant="h5"
                    sx={{...home.contact.typography}}
                >
                    {form_title}
                </Typography>
                <form ref={form} onSubmit={sendEmail}>
                    <Grid container spacing={2}
                          sx={{
                              ...home.contact.grid_container,
                          }}>
                        <Grid size={{sm:6,xs:12}} >
                            <Typography variant="body2" sx={{...home.contact.typography_input }}>
                                {first_input}
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Enter your name"
                                variant="outlined"
                                size="small"
                                name="name"
                                sx={{ bgcolor: '#f5f6fa', borderRadius: 1 }}
                            />
                        </Grid>
                        <Grid size={{sm:6,xs:12}}>
                            <Typography variant="body2" sx={{...home.contact.typography_input }}>
                                {second_input}
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Enter your email"
                                variant="outlined"
                                size="small"
                                name="email"
                                sx={{ bgcolor: '#f5f6fa', borderRadius: 1 }}
                            />
                        </Grid>

                        <Grid size={{sm:12,xs:12,}} sx={{...home.contact.grid_two}}>
                            <Typography variant="body2" sx={{...home.contact.typography_input }}>
                                {third_input}
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Your message here..."
                                variant="outlined"
                                size="small"
                                multiline
                                minRows={4}
                                name="message"
                                sx={{ bgcolor: '#f5f6fa', borderRadius: 1 }}
                            />
                        </Grid>
                        <Grid size={{sm:12,xs:12}}>
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                sx={{
                                    ...home.contact.button
                                }}
                            >
                                {submit}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Box>
    );
};
