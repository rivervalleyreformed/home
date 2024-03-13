import React from 'react';
import { Link } from 'react-router-dom';
import {Box, HStack} from "@chakra-ui/react";
import logo from '../assets/logo.jpg';
const Nav = () =>{
    return(
        <Box 
            position="fixed"
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#18181b">
            <Box color="white" maxWidth="1280px" margin="0 auto">
                <HStack 
                    px={16} 
                    py={4} 
                    justifyContent="space-between" 
                    alignItems="center"
                >
                    <nav>
                        <HStack spacing={8}>
                            <a href="/"><img src={logo} alt="River Valley Reformed" height={100} width={100} /></a>
                        </HStack>
                    </nav>
                    <nav>
                        <HStack spacing={8}>
                            <Link to="/home"><b>Home</b></Link>
                            <Link to="/worship"><b>Worships</b></Link>
                            <Link to="/events"><b>Events</b></Link>
                            <Link to="/aboutus"><b>About Us</b></Link>
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
    )
}


export default Nav;

