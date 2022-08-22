import { Box } from "@chakra-ui/react";
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion";

import Head from 'next/head'
import Banner from '../components/Banner'
import Intro from "../components/Intro";
import Content from "../components/Content";

const useParallax = ( value, distance ) => {
  return useTransform(value, [0, 1], [distance - 400, -distance])
}

export default function Home() {
  const BoxMoion = motion(Box)
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 500);
  return (
    <div>
      <Head>
        <title>天愛つな Amai Tsuna | Unofficial Website</title>
        <meta name="description" content="Amai Tsuna | Unofficial Website" />
        <link rel="icon" href="/tsuna_icon.png" />
      </Head>
      <Box ref={ref} maxH='max-content' >
        <Banner />
        <BoxMoion bg='white' style={{ y }} p='0' m='0' >
          <Intro />
        </BoxMoion>
        <BoxMoion style={{ y }} mt='15rem' minW='100%' minH='1000px' bg='white' >
          <Content />
        </BoxMoion>
      </Box>
    </div>
  )
}
