import { Image, Container, Stack, Text, Heading  } from "@chakra-ui/react";
import { useRef } from "react"
import {  useInView } from "framer-motion";

const Intro = () => {
    const ref = useRef(null);
    const isInView = useInView(ref)
    const ImgStyle = {
        transform: isInView ? "none" : "translateX(-250px)",
        opacity: isInView ? 1 : 0,
        transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0s"
    }
    const StackStyle = {
        transform: isInView ? "none" : "translateX(250px)",
        opacity: isInView ? 1 : 0,
        transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0s"
    }
    return(
        <Container pt='10rem' pb='5rem' minW='75%'>
            <Heading color='#f26e94' align='center' >⋇⊶⊰❣⊱⊷⋇  天愛 つな  ⋇⊶⊰❣⊱⊷⋇</Heading>
            <Heading color='#f26e94' align='center' size='md' >Amai Tsuna</Heading>
            <Text color='blackAlpha.300' fontSize='1.2rem' pt='2rem' >✦•·······································································································•✦•·······································································································•✦</Text>
            <Stack ref={ref} spacing='21rem' direction='row' pl='10rem' pr='10rem' mt='7rem' >
                <Image src='/Tsuna-Unofficial-Website/Tsuna_character.png' maxH='500px' minH='500px' maxW='353px' minW='353px' borderRadius='md' shadow='md'
                    style={ImgStyle}
                />
                <Stack direction='column' border='3px' p='2rem' minW='353px' borderRadius='md' shadow='md' 
                    style={StackStyle}
                >
                    <Text color='blackAlpha.600' fontSize='2xl' >天愛 つな ( Amai Tsuna ) </Text>
                    <Text color='blackAlpha.600' fontSize='md' >あなたの天使天愛つなです</Text>
                    <Text color='blackAlpha.600' fontSize='md' pt='2rem' >Age : UNKNOW</Text>
                    <Text color='blackAlpha.600' fontSize='md' >Height : UNKNOW</Text>
                    <Text color='blackAlpha.600' fontSize='md' >Weight : UNKNOW</Text>
                    <Text color='blackAlpha.600' fontSize='md' >Birthday : March 14</Text>
                    <Text color='blackAlpha.600' fontSize='md' >Species : Angel</Text>
                </Stack>
            </Stack>
            <Text pt='7rem' color='blackAlpha.300' fontSize='1.2rem' >✦•·······································································································•✦•·······································································································•✦</Text>
        </Container>
    )
}

export default Intro