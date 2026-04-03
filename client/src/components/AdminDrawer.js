import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import {Button, Card} from "react-bootstrap";
import image2 from "../images/clean.png"
import PeopleIcon from '@mui/icons-material/People';
import {nav, Setting} from "../App";
import LogoutIcon from '@mui/icons-material/Logout';
import {hotel_name} from "./AfterSearchFromHome";
import {adminHotelName} from "./FirstPageAdmin";
import Cookies from "universal-cookie";


const drawerWidth = 240;
const cookies = new Cookies();

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);



const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: drawerWidth,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const AdminDrawer=()=> {
    console.log(adminHotelName);
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const settings=[
        {
            name:"Rooms",
            location:'/afteradminlogin'
        },
        {
            name:"Services",
            location: '/servicetable'
        },
        {
            name:"Reservation List",
            location: '/reservationlist'
        }
    ]

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <AppBar position="fixed" open={open} >
                    <Toolbar style={{background:"#EBF6FA"}}>

                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerOpen}
                            sx={{...(open && {display: 'none'})}}
                        >
                            <MenuIcon style={{color:"black"}}>

                            </MenuIcon>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Main open={open}>
                    <DrawerHeader/>

                </Main>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >

                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                        </IconButton>
                    </DrawerHeader>
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src={image2} />
                        <Card.Body>
                            {/*<Card.Title>Card Title</Card.Title>*/}
                            <Card.Text>
                                {adminHotelName}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Divider/>
                    <List>
                        {settings.map((text, index) => (
                            <ListItem button key={text.name}  onClick={()=>{
                                //handleDrawerClose();
                                nav(text.location);

                            }}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <BookOnlineIcon/> : <BedroomParentIcon/>}
                                </ListItemIcon>
                                <ListItemText primary={text.name}/>
                            </ListItem>
                        ))}
                        <ListItem button key="Admin Profile" onClick={()=>{
                            nav('/adminprofile');
                        }}>
                            <ListItemIcon>
                                <PeopleIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Admin Profile"/>
                        </ListItem>
                        <ListItem button key="LogOut"
                                  onClick={() => {
                                      cookies.remove('user', {path: '/'})
                                      Setting(false, null, null, null);
                                      nav("/home")
                                  }
                        }
                        >
                            <ListItemIcon>
                                <LogoutIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Logout"/>
                        </ListItem>
                    </List>
                </Drawer>
            </Box>

        </div>
    )
}
export default AdminDrawer