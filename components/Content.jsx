import { Text, Container, Heading, Stack } from "@chakra-ui/react"
import { TabList, Tabs, Tab, TabPanels, TabPanel } from "@chakra-ui/react"
import { Tweet } from 'react-twitter-widgets'
import Youtube from "./Youtube"


const Content = () => {
    return(
        <Container pt='10rem' pb='5rem' minW='75%' align='center' >
            <Heading textColor='#f26e94' >Contents</Heading>
            <Text color='blackAlpha.300' fontSize='1.2rem' pt='2rem' pb='2rem' >✦•·······································································································•✦•·······································································································•✦</Text>
            <Tabs variant='soft-rounded' colorScheme='green' align='center' isFitted maxW='80%' >
            <TabList>
                <Tab _selected={{ color: 'white', bg: 'red.400'}} >Youtube</Tab>
                <Tab _selected={{ color: 'white', bg: 'blue.300'}} >Twitter</Tab>
                <Tab _selected={{ color: 'white', bg: 'cyan.200'}} >Coming Soon</Tab>
            </TabList>
            <TabPanels color='blackAlpha.500' >
                <TabPanel>
                    <Stack direction='column' spacing='2rem' >
                        <Stack direction='row' spacing='2rem'>
                            <Youtube id='Ee9vahkJIiw' />
                            <Youtube id='RV7Y8xbRgCk' />
                            <Youtube id='laep4_oSaO8' />
                        </Stack>
                        <Stack direction='row' spacing='2rem'>
                            <Youtube id='gqj0PL2VOpE' />
                            <Youtube id='QprhLBRVzUQ' />
                            <Youtube id='I5af6kiEqVk' />
                        </Stack>
                    </Stack>
                </TabPanel>
                <TabPanel>
                    <Stack direction='row' spacing='2rem' justify='center'>
                        <Tweet tweetId="1549348535035826176" />
                        <Tweet tweetId="1560982418429190144" />
                        <Tweet tweetId="1561633907967406082" />
                    </Stack>
                </TabPanel>
                <TabPanel pt='7rem' >
                    <Heading>Coming Soon!</Heading>
                    <Text>If I have an idea I will update soon!</Text>
                </TabPanel>
            </TabPanels>
            </Tabs>
            <Text pt='5rem' color='blackAlpha.300' fontSize='1.2rem' >✦•·······································································································•✦•·······································································································•✦</Text>
        </Container>
    )
}

export default Content