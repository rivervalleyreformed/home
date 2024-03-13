import React from 'react';

import {VStack, Text, Button, Stack} from "@chakra-ui/react";

import church from '../assets/church.jpeg';

const Home = ()=>{


    return(
        <VStack 
            backgroundColor="white"
            backgroundImage={church}
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            height="100vh"
            width="100%" >

            <VStack maxWidth="1280px" minHeight="100vh"
                justifyContent="center" alignItems="center">
                <Text 
                    bgGradient='linear(to-r, green, white)'
                    bgClip='text'
                    fontSize='6xl'
                    fontWeight='extrabold'
                    textShadow="1px 1px 80px black, 0 0 1px white, 0 0 1px white"
                    textAlign='center'>Join the Worship!
                </Text>
                <Stack flexDirection={{base:"column", md:"row"}} spacing={10} align='center'>
                    <Button colorScheme='green'>
                        Our Service
                    </Button>
                    <Button colorScheme='green'>
                        Join the Live Stream!
                    </Button>
                </Stack>
            </VStack>
        </VStack>



    )
}


export default Home;



