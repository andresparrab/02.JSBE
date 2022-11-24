import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'

const Main = ({ children, router }) => {
  return (
    <Box as='Main' pb={8}>
      <Head>
        <meta name='viewport' content="width=device-width, initial-scale=1" />
        <title>Andres Parra - Homepage</title>
      </Head>
      <Container maxW="container.md" pt={15}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
