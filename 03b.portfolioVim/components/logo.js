import { Text, Link, Img, useColorModeValue } from "@chakra-ui/react";
import Styled from "@emotion/styled";
const LogoBox = Styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
    > svg {
      transition: 200ms ease;
    }
    &:hover > svg {
      transform: rotate(30deg);
    }
`
const Logo = () => {
  const FootPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.svg`
  return (
    < Link>
        <LogoBox href="/">
          <Img src={FootPrintImg} width={20} height={20} alt='logo icon' />
          <Text 
          color={useColorModeValue('grey.800', 'whiteAlpha.90')}
          fontFamily='M Plus Rounded 1c'
          fontWeight='bold'
          ml={3}
        >Andres Parra</Text>
        </LogoBox>
    </Link >
  )
}

export default Logo
// import Link from 'next/link'
// import { Text, useColorModeValue } from '@chakra-ui/react'
// import FootprintIcon from './icons/footprint'
// import styled from '@emotion/styled'

//   > svg {
//     transition: 200ms ease;
//   }
//   &:hover > svg {
//     transform: rotate(20deg);
//   }
// `

// const Logo = () => {
//   return (
//     <Link href="/" scroll={false}>
//       <a>
//         <LogoBox>
//           <FootprintIcon />
//           <Text
//             color={useColorModeValue('gray.800', 'whiteAlpha.900')}
//             fontFamily='M PLUS Rounded 1c", sans-serif'
//             fontWeight="bold"
//             ml={3}
//           >
//             Takuya Matsuyama
//           </Text>
//         </LogoBox>
//       </a>
//     </Link>
//   )
// }

// export default Logo
