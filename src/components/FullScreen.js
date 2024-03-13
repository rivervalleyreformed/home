import * as React from "react";
import { VStack, Box } from "@chakra-ui/react";
// import church from '../assets/church.jpeg';

const FullScreen = ({children, ...boxProps})=>{
    return(
            <VStack 
                backgroundColor={boxProps.backgroundColor} blur ='2px'>
                <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
                    {children}
                </VStack>
            </VStack>
    )
}

export default FullScreen;


// {...boxProps}
