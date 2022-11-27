import { Box, Container, Flex, Heading, Link, useColorModeValue } from "@chakra-ui/react"
import Logo from "./logo"
import NextLink from 'next/link'

  const LinkItem = ({href, path, chlidren}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('grey.200', 'whiteAlpha.900')
  return (
    <NextLink href={href}>
      <Link>
        {children}
      </Link>
    </NextLink>
)}
const Navbar = props => {
  const {path} =props
  return (
    <Box
      // position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40','#20202380')}
      style={{backdropFilter:'blur(10px))'}}
      zIndex ={1}
      {...props}
    >
      <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-betwen">
        <Flex align="center" mr={5} >
        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
          <Logo/>
        </Heading>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
