import {AppBar, Box, IconButton, List, ListItem, Toolbar, Typography, Menu, MenuItem} from "@mui/material";
import {type Language, navbar_items, navbar_items_by_lang} from "../../data/WebSiteData.ts";
import {navbar_style} from "../../styles/styles.ts"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import {EnFlag} from "../../assets/icons/EnIcon.tsx";
import {EsFlag} from "../../assets/icons/EsFlag.tsx";
import {DeFlag} from "../../assets/icons/DeFlag.tsx";
import { WorldIcon } from "../../assets/icons/WorldIcon";
import {useDispatch, useSelector} from "react-redux";
import {switchLanguage} from "../../redux/reducers/languageSlice.ts";
import { setOpenDrawer } from "../../redux/reducers/navbarSlice.ts";
import { MobileDrawer } from "./MobileDrawer.tsx";
import { useMediaQuery, useTheme } from "@mui/material";
import { openSkillDialog } from "../../redux/reducers/drawerSlice.ts";
import type { RootState } from "../../redux/store.ts";

export const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const language = useSelector((state: RootState) => state.languageSelector.switchTo);
    const items = navbar_items_by_lang[language] || navbar_items_by_lang.en;

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const closeMenu = () => setAnchorEl(null);

    const handleClose = (lang: Language) => {
        dispatch(switchLanguage(lang))
        setAnchorEl(null);
    };

    const handleNavItemClick = (link: string) => {
        if (link === "/contact") {
            dispatch(openSkillDialog({}));
        } else {
            scrollToSection(link);
        }
    };

    const scrollToSection = (link: string) => {
        if (link === "/") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const sectionId = link.replace(/^\//, "");
        const element = document.getElementById(sectionId);
        if (element) {
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Box>
            <AppBar style={{backgroundColor:'transparent'}}>
                <Toolbar disableGutters={true} sx={{...navbar_style.appbar}} >
                    <List sx={{
                        ...navbar_style.list,
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {isMobile && (
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ ...navbar_style.burgerMenu }}
                                    onClick={() => dispatch(setOpenDrawer())}
                                >
                                    <MenuIcon />
                                </IconButton>
                            )}
                            {!isMobile && items.map((item, index) => (
                                <ListItem
                                    sx={{
                                        ...navbar_style.listItem,
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => handleNavItemClick(item.link)}
                                    key={index}
                                >
                                    <Typography sx={{...navbar_style.typography}}>
                                        {item.name}
                                    </Typography>
                                </ListItem>
                            ))}
                        </Box>
                        <ListItem sx={{
                            width: 'auto',
                            cursor: 'pointer',
                            borderBottomLeftRadius:'100px',
                            borderBottomRightRadius:'100px',
                            borderTopLeftRadius:'100px',
                            borderTopRightRadius:'100px',
                            padding: 0
                        }}>
                            <IconButton
                                onClick={handleClick}
                                size="medium"
                                sx={{ 
                                    '& svg': {
                                        width: '32px',
                                        height: '32px',
                                        color: 'white',
                                    }
                                }}
                                aria-controls={open ? 'language-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <WorldIcon />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                id="language-menu"
                                open={open}
                                onClose={closeMenu}
                                PaperProps={{
                                    sx: {
                                        '& .MuiMenuItem-root': {
                                            padding: '8px 16px',
                                            '& svg': {
                                                width: '24px',
                                                height: '24px',
                                                marginRight: '8px'
                                            }
                                        }
                                    }
                                }}
                            >
                                <MenuItem onClick={() => handleClose("en")}>
                                    <EnFlag width={24} height={24} />
                                    EN
                                </MenuItem>
                                <MenuItem onClick={() => handleClose("esp")}>
                                    <EsFlag width={24} height={24} />
                                    ES
                                </MenuItem>
                            </Menu>
                        </ListItem>
                    </List>
                </Toolbar>
            </AppBar>
            <MobileDrawer />
        </Box>
    )
}