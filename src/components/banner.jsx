import { Box, Image } from "@chakra-ui/react"
function Banner() {
  return <>
          <header>
            <Box d="flex" alignItems="center" justifyContent="space-between" ml={6} mr={6}>
              <Box><Image boxSize="90px" src="{brandLogo" /></Box>
              <Box></Box>
            </Box>
          </header>
        </>;
}

export default Banner;
