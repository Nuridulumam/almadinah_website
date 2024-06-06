import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  useBreakpoint,
  Collapse,
} from "@chakra-ui/react";
import { ArrowForwardIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import LogoMobile from "../../../assets/image/al-madinah-rbg.svg";
import Logo from "../../../assets/image/Navbar Logo.svg";
import { Link as ScrollLink } from "react-scroll";

const MenuItems = (props) => {
  const { children, isLast, to = "/", ...rest } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link to={to} reloadDocument>
        {children}
      </Link>
    </Text>
  );
};

const Header = (props) => {
  const path = window.location.pathname.split("/");
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);
  const breakpoint = useBreakpoint();
  const toggleMenu = () => setShow(!show);

  // *scroll check
  const isScroll = () => {
    if (window.scrollY >= 10) setScroll(true);
    else setScroll(false);
  };
  window.addEventListener("scroll", isScroll);

  return (
    <Flex
      as="header"
      position="fixed"
      align="center"
      justify="space-between"
      wrap="wrap"
      transition="0.5s"
      w="100%"
      px={[4, 4, 8, 8]}
      py={scroll ? 2 : 4}
      bg={["green.500", "green.500", "white", "white"]}
      color={["whiteAlpha.900", "whiteAlpha.900", "green.500", "green.500"]}
      {...props}
    >
      <ScrollLink smooth duration={400} offset={-100} to="home">
        <Flex align="center">
          <Image
            w={["32px", "32px", "42px", "42px"]}
            objectFit="cover"
            src={breakpoint === "base" ? LogoMobile : Logo}
            alt="logo-almadinah"
          />
          <Text
            cursor={"pointer"}
            as={"b"}
            pl={5}
            color={["whiteAlpha.900", "green.500"]}
          >
            AL Madinah Diwek Jombang
          </Text>
        </Flex>
      </ScrollLink>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Box display={"block"} flexBasis={{ base: "100%", md: "auto" }}>
        <Collapse
          in={breakpoint === "base" ? show : true}
          unmountOnExit
          animateOpacity
        >
          <Flex
            align={["center", "center", "center", "center"]}
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            fontSize={18}
            fontWeight={500}
            pt={[4, 4, 0, 0]}
          >
            {path.includes("psdb") ? (
              <MenuItems to="/">Home</MenuItems>
            ) : (
              <>
                <MenuItems>
                  <ScrollLink smooth duration={400} offset={-100} to="about">
                    Tentang
                  </ScrollLink>
                </MenuItems>
                <MenuItems>
                  <ScrollLink smooth duration={400} offset={-100} to="visi">
                    Visi
                  </ScrollLink>
                </MenuItems>
                <MenuItems>
                  <ScrollLink smooth duration={400} offset={-100} to="programs">
                    Program{" "}
                  </ScrollLink>
                </MenuItems>
                <MenuItems to="/psdb" isLast>
                  <Button
                    size="sm"
                    rounded="md"
                    bg={[
                      "whiteAlpha.900",
                      "whiteAlpha.900",
                      "green.500",
                      "green.500",
                    ]}
                    color={[
                      "green.500",
                      "green.500",
                      "whiteAlpha.900",
                      "whiteAlpha.900",
                    ]}
                    _hover={{
                      bg: ["gray.100", "gray.100", "gray.600", "gray.600"],
                    }}
                  >
                    PSDB <ArrowForwardIcon />
                  </Button>
                </MenuItems>
              </>
            )}
          </Flex>
        </Collapse>
      </Box>
    </Flex>
  );
};

export default Header;
