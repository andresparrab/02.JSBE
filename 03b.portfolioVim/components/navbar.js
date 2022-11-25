import { Box, Container, Heading } from "@chakra-ui/react"
import Logo from "./logo"

const Navbar = (router, children) => {
  return (
    <Box>
      <Container>
        <Heading>
          <Logo />
        </Heading>
      </Container>
    </Box>
  )
}

export default Navbar
