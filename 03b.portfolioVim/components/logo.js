import { Text, Link, useColorModeValue } from "@chakra-ui/react";
import Image from 'next/image'
import styled from "@emotion/styled";

const LogoBox = styled.span`
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
  const footPrintImg = `/home/vostro/Git/02.JSBE/03b.portfolioVim/images/footprint.png`
  return (
    < Link href="/">
      <a>
        <LogoBox>
          <Image src="/home/vostro/Git/02.JSBE/03b.portfolioVim/images/footprint.png" width={20} height={20} alt="logo" />
          <Text>Andres Parra</Text>
        </LogoBox>
      </a>
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
