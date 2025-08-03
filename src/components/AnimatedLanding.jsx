import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  Box,
  Input,
  Button,
  Heading,
  Text,
  Stack,
  chakra,
} from "@chakra-ui/react";

import backgroundImg from "../assets/landing/background_desktop.png";
import backgroundMbl from "../assets/landing/background_mobile.png"
import chapelImg from "../assets/landing/chapel.png";
import coupleImg from "../assets/landing/couple.png";
import clouds from "../assets/landing/clouds.gif"
import cloudsMbl from "../assets/landing/cloud_mbl.gif"

const PASSWORDS = ["wehrfritz1016"];

export default function AnimatedLanding({ onAuthenticate }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const chapelX = useTransform(x, [-100, 100], [-5, 5]); // slower motion
  const coupleX = useTransform(x, [-100, 100], [-15, 15]); // faster than chapel
  const coupleY = useTransform(y, [-100, 100], [-8, 8]); // subtle vertical shift

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const offsetX = e.clientX - innerWidth / 2;
    const offsetY = e.clientY - innerHeight / 2;
    x.set(offsetX / 10);
    y.set(offsetY / 10);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (PASSWORDS.includes(password.toLowerCase().trim())) {
      sessionStorage.setItem("wedding-authed", "true");
      onAuthenticate();
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      position="relative"
      w="100%"
      h="100vh"
      overflow="hidden"
      onMouseMove={handleMouseMove}
    >
      <Box display={{ base: "block", md: "none" }}>
        <Box
          position="fixed"
          top={0}
          left={0}
          width="100vw"
          height="100vh"
          zIndex={0}
          pointerEvents="none"
        >
         
        </Box>
        <motion.img
          src={backgroundMbl}
          alt="Background Mobile"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
      </Box>
      <Box display={{ base: "none", md: "block" }}>
        <Box
          position="fixed"
          top={0}
          left={0}
          width="100vw"
          height="100vh"
          zIndex={0}
          pointerEvents="none"
        >
          <motion.img
            src={cloudsMbl}
            alt="Clouds"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.4,
              zIndex: -1,
              position: "absolute",
              top: 0,
              left: 0,
            }}
            animate={{ opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </Box>
        <motion.img
          src={backgroundImg}
          alt="Background"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
      </Box>
    {/* desktop images */}
          <Box display={{ base: "none", md: "block" }}>
         
        <motion.img
          src={chapelImg}
          alt="Chapel"
          sx={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: { base: "100%", md: "65rem" },
            zIndex: 100,
            pointerEvents: "none",
          }}
          animate={{ x: chapelX }}
              />
               <motion.img
            src={clouds}
            alt="Clouds"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            opacity: 0.4,
            position: "absolute",
              zIndex: -1
              
            }}
            zIndex={5}
            animate={{ opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        <motion.img
          src={coupleImg}
          alt="Couple"
          style={{
            position: "absolute",
            bottom: "7%",
            left: "35%",
            transform: "translateX(-50%)",
            width: "20rem",
            zIndex: 20,
            pointerEvents: "none",
          }}
          animate={{ x: coupleX, y: coupleY }}
        />
          </Box>


          {/* Mobile images */}
        <Box display={{ base: "block", md: "none" }}>
        <motion.img
          src={chapelImg}
          alt="Chapel"
          style={{
            position: "absolute",
            top: "5%",
            transform: "translateX(-50%)",
            width: "110%",
            zIndex: 10,
            pointerEvents: "none",
          }}
          animate={{ x: chapelX }}
        />
        <motion.img
          src={coupleImg}
          alt="Couple"
          style={{
            position: "absolute",
            top: "25%",
            left: "23%",
            transform: "translateX(-50%)",
            width: "12rem",
            zIndex: 20,
            pointerEvents: "none",
          }}
          animate={{ x: coupleX, y: coupleY }}
        />
      </Box>

      <Box
        position={{ base: "relative", md: "absolute" }}
        bottom={{ base: "auto", md: "2.5rem" }}
        top={{ base: "60%", md: "auto" }}
        left="50%"
        transform="translateX(-50%)"
        zIndex={30}
        w="100%"
        maxW="28rem"
        px={4}
      >
        <Box bg="whiteAlpha.900" backdropFilter="blur(10px)" borderRadius="xl" boxShadow="xl" p={6}>
          <Stack spacing={4} textAlign="center">
            <Heading as="h2" size="md" color="gray.700" fontFamily="serif">
              Welcome to Our Wedding
            </Heading>
            <Text color="gray.600" fontSize="sm">
              Please enter the password from your invite
            </Text>
            <chakra.form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  bg="whiteAlpha.700"
                  isInvalid={!!error}
                />
                {error && (
                  <Text color="red.500" fontSize="sm" textAlign="center">
                    {error}
                  </Text>
                )}
                <Button type="submit" colorScheme="green" mt={2} w="100%">
                  Enter
                </Button>
              </Stack>
            </chakra.form>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}