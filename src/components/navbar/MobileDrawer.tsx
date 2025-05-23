import { Drawer, List, ListItem, Typography, IconButton, Box } from "@mui/material";

import { navbar_items } from "../../data/WebSiteData.ts";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store.ts";
import { setCloseDrawer } from "../../redux/reducers/navbarSlice.ts";
import { openSkillDialog } from "../../redux/reducers/drawerSlice.ts";
import CloseIcon from '@mui/icons-material/Close';

export const MobileDrawer = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.drawer.open);

    const handleNavItemClick = (sectionId: string) => {
        if (sectionId === "Contact") {
            dispatch(openSkillDialog({}));
            dispatch(setCloseDrawer());
        } else {
            scrollToSection(sectionId);
        }
    };

    const scrollToSection = (sectionId: string) => {
        const formattedId = sectionId.toLowerCase().replace(/\s+/g, '-');
        const element = document.getElementById(formattedId);
        
        if (element) {
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        }
        dispatch(setCloseDrawer());
    };

    return (
        <Drawer
            anchor="left"
            open={isOpen}
            onClose={() => dispatch(setCloseDrawer())}
            PaperProps={{
                sx: {
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    width: '250px',
                }
            }}
        >
            <IconButton
                onClick={() => dispatch(setCloseDrawer())}
                sx={{
                    color: 'white',
                    position: 'absolute',
                    right: 8,
                    top: 8,
                }}
            >
                <CloseIcon />
            </IconButton>
            <List sx={{ 
                mt: 8,
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
            }}>
                {navbar_items.map((item, index) => (
                    <ListItem
                        key={index}
                        onClick={() => handleNavItemClick(item.name)}
                        sx={{
                            display: 'flex',
                            backgroundColor: 'rgba(225,225,225,0)',
                            height: 'auto',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            borderTopLeftRadius: '20px',
                            borderTopRightRadius: '20px',
                            borderBottomLeftRadius: '20px',
                            borderBottomRightRadius: '20px',
                            border: '1px solid transparent',
                            transition: 'all 0.3s ease-in-out',
                            cursor: 'pointer',
                            '&:hover': {
                                boxShadow: '5px -12px 83px -8px rgba(129,0,255,0.73)',
                                transition: 'all 0.3s ease-in-out',
                                border: '2px solid',
                                borderColor: '#4a1673',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            }
                        }}
                    >
                        <Typography sx={{ color: '#fff' }}>{item.name}</Typography>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}; 