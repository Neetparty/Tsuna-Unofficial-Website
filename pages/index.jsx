import { Box, Container } from "@chakra-ui/react";
import { useRef } from "react"
import { motion, useScroll, useTransform} from "framer-motion";

import Head from 'next/head'
import Banner from '../components/Banner'
import styles from '../styles/Home.module.css'
import Intro from "../components/Intro";

const useParallax = ( value, distance ) => {
  return useTransform(value, [0, 1], [distance - 400, -distance])
}

export default function Home() {
  const BoxMoion = motion(Box)
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 500);
  return (
    <div className={styles.container}>
      <Head>
        <title>天愛つな Amai Tsuna | Unofficial Website</title>
        <meta name="description" content="Amai Tsuna | Unofficial Website" />
        <link rel="icon" href="/tsuna_icon.png" />
      </Head>
      <Box>
        <Banner />
        <BoxMoion bg='white' style={{ y }} p='0' m='0' >
          <Intro />
        </BoxMoion>
      </Box>
    </div>
  )
}
