import { Box, Image } from "@chakra-ui/react"
import brandLogo from '../assets/brand-logo.svg'

function Banner() {
  return <>
          <header>
            <Box d="flex" alignItems="center" justifyContent="space-between" ml={6} mr={6}>
              <Box><Image boxSize="90px" src={brandLogo} alt="brand" /></Box>
              <Box></Box>
            </Box>
          </header>
        </>;
}

export default Banner;
