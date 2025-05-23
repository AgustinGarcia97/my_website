import {Box, Typography} from "@mui/material"
import {useDispatch} from "react-redux";


interface SkillCardProps {
    skill?: { title: string; photo_url: string; box_shadow: string } | {
        title: string;
        photo_url: string;
        box_shadow: string
    }
}

export const SkillCard = ({skill}: SkillCardProps) => {
    useDispatch();
    const skill_card = {
        box: {

            display: 'flex',
            height: {xs: "23vh", sm: "20vh", lg: "25vh", xl: "30vh"},
            width: {xs: "40vw", sm: "25vw", lg: "20vw", xl: "15vw"},
            transition: 'all 0.3s ease-in-out',
            backgroundImage: `url(${skill?.photo_url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '10px',
            position: 'relative',
            backgroundColor: 'white',
            '&:hover': {
                boxShadow: skill?.box_shadow,
                transition: 'all 0.3s ease-in-out',
                transform: 'scale(1.020)',
                borderColor: '#4a1673',


            },

            '&:hover .skill-title': {
                display: 'flex',

            },
            '&:hover .overlay': {
                opacity: 1,
            },
        },

        title: {
            position: 'absolute',
            display: 'none',
            bottom: '20px',
            left: '20px',
            color: "#353535",
            fontFamily:"'Lato Black', sans-serif",
            fontSize: '24px',
            fontWeight: 'bold',

            textShadow: `
                            -1px -1px 0 #e3e3e3,
                            1px -1px 0 #e3e3e3,
                            -1px 1px 0 #e3e3e3,
                            1px 1px 0 #e3e3e3
                       `,


        },
        title_text:{
            fontFamily:"'Lato Black', sans-serif",
            fontSize: '30px',
            fontWeight: 'bold',
            textShadow: `
                            -1px -1px 0 #e3e3e3,
                            1px -1px 0 #e3e3e3,
                            -1px 1px 0 #e3e3e3,
                            1px 1px 0 #e3e3e3`,
        }
    }

    return (
        <Box sx={{...skill_card.box}}  className={"overlay"}>
            <Box sx={{...skill_card.title}} className={"skill-title"}>
                <Typography sx={{...skill_card.title_text}} variant="h5" component="div">{skill?.title}</Typography>
            </Box>
        </Box>
    )
}

