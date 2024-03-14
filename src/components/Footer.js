import React from 'react';
import {Box, VStack, HStack, Text, Flex} from "@chakra-ui/react";
import { faFacebook} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Footer = ()=>{
    return(

      <VStack backgroundColor="black">
        <Box color="white" >
        <Flex
          px={30}
          py={4}
          flexDirection={{base:"column", md:"row"}}>
          <Box p ="6">
            <Text fontSize='lg' as='ins'><b>Join Us</b></Text>
            <Text fontSize='md'>River Valley Reformed Church</Text>
            <Text fontSize='md'>999 Mcclelland St, Monaca, PA 15061</Text>
          </Box>
          <Box p ="6">
            <Text fontSize='lg' as='ins'><b>Contact Us</b></Text>
            <Text fontSize='md'>(765)437-3349</Text>
            <Text fontSize='md'>rivervalleyreformed@gmail.com</Text>
          </Box>
          <Box p ="6">
            <HStack spacing={5}>
              <a href="https://www.facebook.com/RVFBeaver"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
              <a href="mailto: rivervalleyreformed@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
            </HStack>
          </Box>

          </Flex>

        </Box>

        <Box color='white'>
          <Text fontSize='xs'>Copyright © 2024 River Valley Reformed Church</Text>
        </Box>
      </VStack>



    )
}


export default Footer


// <Flex
// margin="0 auto"
// px={12}
// color="white"
// justifyContent="center"
// alignItems="center"
// maxWidth="1024px"
// height={16}
// >
// <p>River Valley Reformed • © 2024</p>
// </Flex>





