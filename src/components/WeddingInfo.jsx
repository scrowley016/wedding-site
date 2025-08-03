import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  List,
  ListItem,
  Card,
  CardHeader,
  CardBody,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaShirt, FaMapPin, FaCar, FaPlane } from "react-icons/fa6";

const WeddingInfo = () => {
  return (
    <Box maxW="4xl" mx="auto" spacing={8}>
      <Box textAlign="center" mb={8}>
        <Heading as="h1" size="lg" mb={2} fontFamily="serif" color="slate.700" textAlign="center">
          Wedding Details
        </Heading>
        <Text color="slate.600">Everything you need to know for our special day</Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {/* Attire */}
        <Card bg="whiteAlpha.700" backdropFilter="blur(4px)" border="1px solid" borderColor="green.100" boxShadow="lg">
          <CardHeader>
            <HStack spacing={2} color="slate.700">
              <Icon as={FaShirt} color="green.600" boxSize={5} />
              <Text fontWeight="bold">What to Wear</Text>
            </HStack>
          </CardHeader>
          <CardBody>
            <VStack align="start" spacing={4}>
              <Box>
                <Heading as="h4" size="sm" mb={2} fontWeight="semibold" color="slate.700">
                  Dress Code
                </Heading>
                <Text color="slate.600">Semi-Formal / Cocktail Attire</Text>
              </Box>

              <Box>
                <Heading as="h4" size="sm" mb={2} fontWeight="semibold" color="slate.700">
                  Colors
                </Heading>
                <Text color="slate.600">
                  Feel free to wear any colors that make you feel beautiful! <br />
                  Our wedding palette includes soft greens, blush pinks, and cream.
                </Text>
              </Box>

              <Box>
                <Heading as="h4" size="sm" mb={2} fontWeight="semibold" color="slate.700">
                  Suggestions
                </Heading>
                <List spacing={1} color="slate.600" styleType="disc" pl={4}>
                  <ListItem>Dresses, suits, or dress pants with nice tops</ListItem>
                  <ListItem>Comfortable shoes for dancing</ListItem>
                  <ListItem>Light jacket for evening</ListItem>
                </List>
              </Box>
            </VStack>
          </CardBody>
        </Card>

        {/* Venue Information */}
        <Card bg="whiteAlpha.700" backdropFilter="blur(4px)" border="1px solid" borderColor="green.100" boxShadow="lg">
          <CardHeader>
            <HStack spacing={2} color="slate.700">
              <Icon as={FaMapPin} color="green.600" boxSize={5} />
              <Text fontWeight="bold">Venue Details</Text>
            </HStack>
          </CardHeader>
          <CardBody>
            <VStack align="start" spacing={4}>
              <Box>
                <Heading as="h4" size="sm" mb={2} fontWeight="semibold" color="slate.700">
                  Ceremony & Reception
                </Heading>
                <Text color="slate.600" whiteSpace="pre-line">
                  [Venue Name]{"\n"}
                  [Venue Address]{"\n"}
                  Buffalo, NY
                </Text>
              </Box>

              <Box>
                <Heading as="h4" size="sm" mb={2} fontWeight="semibold" color="slate.700">
                  Schedule
                </Heading>
                <List spacing={1} color="slate.600" styleType="disc" pl={4}>
                  <ListItem>4:00 PM - Ceremony</ListItem>
                  <ListItem>5:00 PM - Cocktail Hour</ListItem>
                  <ListItem>6:30 PM - Dinner & Dancing</ListItem>
                  <ListItem>11:00 PM - Send Off</ListItem>
                </List>
              </Box>
            </VStack>
          </CardBody>
        </Card>
      </SimpleGrid>

      {/* Travel & Accommodations */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mt={8}>
        <Card bg="whiteAlpha.700" backdropFilter="blur(4px)" border="1px solid" borderColor="green.100" boxShadow="lg">
          <CardHeader>
            <HStack spacing={2} color="slate.700">
              <Icon as={FaCar} color="green.600" boxSize={5} />
              <Text fontWeight="bold">Getting There</Text>
            </HStack>
          </CardHeader>
          <CardBody>
            <VStack align="start" spacing={4}>
              <Box>
                <Heading as="h4" size="sm" mb={2} fontWeight="semibold" color="slate.700">
                  Driving
                </Heading>
                <Text color="slate.600">
                  Free parking available at the venue. <br />
                  The venue is easily accessible from major highways.
                </Text>
              </Box>

              <Box>
                <Heading as="h4" size="sm" mb={2} fontWeight="semibold" color="slate.700">
                  Rideshare
                </Heading>
                <Text color="slate.600">Uber and Lyft are readily available in the Buffalo area.</Text>
              </Box>
            </VStack>
          </CardBody>
        </Card>

        <Card bg="whiteAlpha.700" backdropFilter="blur(4px)" border="1px solid" borderColor="green.100" boxShadow="lg">
          <CardHeader>
            <HStack spacing={2} color="slate.700">
              <Icon as={FaPlane} color="green.600" boxSize={5} />
              <Text fontWeight="bold">Accommodations</Text>
            </HStack>
          </CardHeader>
          <CardBody>
            <VStack align="start" spacing={4}>
              <Box>
                <Heading as="h4" size="sm" mb={2} fontWeight="semibold" color="slate.700">
                  Recommended Hotels
                </Heading>
                <VStack align="start" spacing={2} color="slate.600">
                  <Text>
                    <Text as="strong">[Hotel Name 1]</Text>
                    <br />
                    Group rate available - mention "Crowley-Wehrfitz Wedding"
                  </Text>
                  <Text>
                    <Text as="strong">[Hotel Name 2]</Text>
                    <br />
                    15 minutes from venue
                  </Text>
                </VStack>
              </Box>
            </VStack>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
}

export default WeddingInfo;