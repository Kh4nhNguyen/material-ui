import * as React from 'react';
import {styled, useTheme, Theme, CSSObject} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HeaderDraft from "./HeaderDraft";
import {useState} from "react";
import CreateDraft from "./CreateDraft";
import {Button, ButtonGroup} from "@mui/material";

interface Props {
    width: string
}

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    backgroundColor: 'black!important',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    position: 'inherit',
    height: '1599px',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    position: 'inherit',
    height: '1599px',
    backgroundColor: 'black!important',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        position:'fixed',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const MiniDrawer: React.FC<Props> = (props: Props) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [checkIcon, setCheckIcon] = useState<boolean>(true)

    const handleDrawerOpen = () => {
        setOpen(true);
        setCheckIcon(!checkIcon)
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setCheckIcon(!checkIcon)
    };

    return (
        <Box sx={{
            display: 'flex',
            width: '1440px',
            position:'relative'
        }}>
            <CssBaseline/>
            <AppBar sx={{
                alignItems: 'center',
                background: 'none',
                position: 'fixed',
            }}>
                <HeaderDraft width={props.width}/>
            </AppBar>
            <Drawer variant="permanent" open={open} >
                <DrawerHeader/>
                <Toolbar sx={{
                    background: '#151717',
                }}>
                    {checkIcon ? (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: 5,
                                ...(open && {display: 'none'}),
                                color: 'white',
                            }}
                        >
                            <MenuIcon/>
                        </IconButton>
                    ) : (
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon sx={{color: 'white'}}/> :
                                <ChevronLeftIcon sx={{color: 'white'}}/>}
                        </IconButton>
                    )}
                </Toolbar>
                <Divider/>
                <List sx={{
                    background: '#151717',
                }}>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItemButton
                            key={text}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                color: 'white',
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: 'white'
                                }}
                            >
                                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text} sx={{opacity: open ? 1 : 0}}/>
                        </ListItemButton>
                    ))}
                </List>
                <Divider/>
                <List sx={{
                    background: '#151717',
                    position: 'relative',
                }}>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItemButton
                            key={text}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                color: 'white'
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: 'white',
                                }}
                            >
                                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text} sx={{opacity: open ? 1 : 0}}/>
                        </ListItemButton>
                    ))}
                </List>
                <Box sx={{
                    position:'fixed',
                    marginTop:'48vmax',
                    marginLeft:'10px'
                }}>
                    <IconButton sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '0px auto',
                    }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 19.5C4 18.1193 5.11929 17 6.5 17H20" stroke="white" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M6.5 2H20V22H6.5C5.11929 22 4 20.8807 4 19.5V4.5C4 3.11929 5.11929 2 6.5 2Z"
                                  stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </IconButton>
                </Box>
            </Drawer>
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <DrawerHeader/>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Box sx={{
                        width: '920px',
                        height: '61px',
                        display: 'flex',
                        alignItems: 'flex-start',
                        margin: '0px auto',
                        padding: '0px',
                        flexDirection: 'column',
                    }}>
                        <Box>
                            <ButtonGroup sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: '8px 16px'

                            }} onClick={handleDrawerClose}>
                                {!checkIcon ? (
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                        <IconButton>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="black"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 12H4" stroke="black" strokeWidth="2" strokeLinecap="round"
                                                      strokeLinejoin="round"/>
                                                <path d="M10 18L4 12L10 6" stroke="white" strokeWidth="2"
                                                      strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </IconButton>
                                        <Typography sx={{
                                            width: '39px',
                                            height: '19px',
                                            fontFamily: 'Inter',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '16px',
                                            lineHeight: '19px',
                                            display: 'flex',
                                            alignItems: 'center',
                                        }} variant={'h5'}>Back</Typography>
                                    </Box>
                                ) : (
                                    <Box sx={{
                                        width: '39px',
                                        height: '19px',
                                    }}></Box>
                                )}
                            </ButtonGroup>
                        </Box>
                        <Box>
                            <Typography sx={{
                                width: '191px',
                                height: '39px',
                                fontFamily: 'Inter',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontSize: '32px',
                                fontHeight: '39px',
                                margin: '0px 32px',
                            }} variant={'h2'}>Create Draft</Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        marginTop: '32px'
                    }}>
                        <CreateDraft/>
                    </Box>
                    <Button sx={{
                        width: '240px',
                        height: '43px',
                        background: '#298991',
                        borderRadius: '22px',
                        color: 'white',
                        padding: '13px 27px',
                        marginTop: '64px',
                    }}>
                        create
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default MiniDrawer
