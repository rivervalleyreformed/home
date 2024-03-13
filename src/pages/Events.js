import React from 'react';
import {Heading, VStack } from "@chakra-ui/react";
import FullScreen from '../components/FullScreen';

const Events = ()=>{
    return(
        <FullScreen 
            justifyContent="center"
            alignItems="center"
            backgroundColor="#2A4365">
                <Heading>Events</Heading>

        </FullScreen>
    )
}


export default Events;