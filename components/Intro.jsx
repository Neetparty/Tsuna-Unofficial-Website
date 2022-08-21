import { Image, Container, Stack, Text, Heading  } from "@chakra-ui/react";
import { motion} from "framer-motion";

const Intro = () => {
    const ImgMotion = motion(Image)
    return(
        <Container pt='10rem' pb='5rem' minW='75%'>
            <Heading color='#f26e94' align='center' >⋇⊶⊰❣⊱⊷⋇  天愛 つな  ⋇⊶⊰❣⊱⊷⋇</Heading>
            <Heading color='#f26e94' align='center' size='md' >Amai Tsuna</Heading>
            <Text color='blackAlpha.300' fontSize='1.2rem' >✦•·······································································································•✦•·······································································································•✦</Text>
            <Stack spacing='15rem' direction='row' pl='10rem' pr='10rem' mt='7rem' >
                <ImgMotion src='/Tsuna_character.png' maxH='500px' minH='500px' maxW='353px' minW='353px' borderRadius='md' shadow='md' />
                <Text color='black' >Amai Tsuna</Text>
            </Stack>
            <Text pt='7rem' color='blackAlpha.300' fontSize='1.2rem' >✦•·······································································································•✦•·······································································································•✦</Text>
        </Container>
    )
}

export default Intro