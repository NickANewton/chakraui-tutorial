import { Box, Image, Button, Container, Heading, Stack, HStack, VStack } from "@chakra-ui/react"
import brandLogo from '../assets/brand-logo.svg'
import illustration from '../assets/illustration.svg'

function Banner() {
  return <>
          <header>
            <Box display="flex" alignItems="center" justifyContent="space-between" ml={6} mr={6}>
              <Box>
                <Image boxSize="90px" src={brandLogo} alt="brand" />
              </Box>
              <Box>
                <Button pr={3} colorScheme="gray.600" fontSize="sm" variant="link">
                  Log in
                </Button>
                <Button colorScheme="gray.600" fontSize="sm" variant="link">
                  Sign out
                </Button>
              </Box>
            </Box>
          </header>

          {/* main punch line */}

          <Box>
            <Container maxWidth="container.xl">
              <Box display="flex" alignItems="center" py="20" flexDirection="row">
                <Box>
                  <Heading>
                    <Box>Dive in! There are so many things to do in Meetup</Box>
                  </Heading>
                  <Box mt="6" fontWeight="medium">
                    Join a group to meet people, make friends, find support, grow a
                    business, and explore your interests. Thousands of events are
                    happening every day, both online and in person!
                  </Box>
                </Box>
                <Box w="100%">
                  <Image w="100%" src={illustration} alt="illustration" />
                </Box>
              </Box>

            </Container>
          </Box>

          <VStack spacing='24px'>
            <Box bg='green' w='100px' h='100px'></Box>
            <Box bg='red' w='100px' h='100px'></Box>
          </VStack>

        </>;
}

export default Banner;
