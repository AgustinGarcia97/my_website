import * as React from 'react';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../redux/store.ts";
import {openSkillDialog} from "../../redux/reducers/drawerSlice.ts";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

interface SkillData {
    title: string;
    definition: string;
    my_uses: string;
    extra: string;
}

interface Skill {
    [key: string]: SkillData;
}

export const DialogCard = ()=> {
    const dispatch = useDispatch();
    const open = useSelector((state: RootState) => state.dialog.open);
    const skill = useSelector((state: RootState) => state.dialog.skill) as Skill;
    const language = useSelector((state: RootState) => state.languageSelector.switchTo);
    
    const handleClose = () => {
        dispatch(openSkillDialog({}));
    };

    // Debug logs
    console.log('Current language:', language);
    console.log('Skill data:', skill);
    console.log('Available languages in skill:', Object.keys(skill));

    // Get the skill data for the current language
    const skillData = skill[language] || skill['eng']; // Fallback to English if current language not found
    console.log('Selected skill data:', skillData);

    return (
        <React.Fragment>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                PaperProps={{
                    sx: {
                        background: 'rgba(20, 20, 20, 0.7)',
                        backdropFilter: 'blur(8px)',
                        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                        borderRadius: 3,
                    }
                }}
            >
                <DialogTitle sx={{ m: 0, p: 2, color:'#c3c0c0'}} id="customized-dialog-title">
                    {skillData?.title }
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent>
                    <Typography variant="body1" sx={{ color: '#c3c0c0', mb: 2 }}>
                        {skillData?.definition || 'No definition available'}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#c3c0c0', mb: 2 }}>
                        {skillData?.my_uses || 'No usage information available'}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#c3c0c0' }}>
                        {skillData?.extra || 'No additional information available'}
                    </Typography>
                </DialogContent>
            </BootstrapDialog>
        </React.Fragment>
    );
}
