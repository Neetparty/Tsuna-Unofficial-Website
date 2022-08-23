import { Box } from "@chakra-ui/react"

const Youtube = (props) => {
    return(
        <Box maxW='352' maxH='198' pt='1rem' >
            <iframe width="352" height="198" src={`https://www.youtube.com/embed/${props.id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Box>
    )
}

export default Youtube