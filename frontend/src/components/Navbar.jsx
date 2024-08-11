import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { IoMdHome } from "react-icons/io";
import MenuIcon from '@mui/icons-material/Menu';
import { MdAddBox } from "react-icons/md";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        EmployeeApp
                    </Typography>
                    <Link to={'/'}>
                        <Button color="inherit">
                        <IoMdHome size={30} color='white'/>
                    </Button>
                    </Link>
                    <Link to={'/add'}>
                        <Button color="inherit">
                            <MdAddBox size={30} color='white'/>
                        </Button>
                    </Link>
                    
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;
