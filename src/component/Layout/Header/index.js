import { useState } from "react"
import { Link } from "react-router-dom"
import {Box, Flex, Text, Button, Image, useBreakpoint, Collapse} from "@chakra-ui/react"
import {ArrowForwardIcon, CloseIcon, HamburgerIcon} from "@chakra-ui/icons"
import Logo from "../../../assets/image/Navbar Logo.svg"

const MenuItems = (props) => {
    const { children, isLast, to = "/", ...rest } = props
    return (
        <Text
            mb={{ base: isLast ? 0 : 8, sm: 0 }}
            mr={{ base: 0, sm: isLast ? 0 : 8 }}
            display="block"
            {...rest}
        >
            <Link to={to}>{children}</Link>
        </Text>
    )
}

const Header = (props) => {
    const [show, setShow] = useState(false)
    const breakpoint = useBreakpoint()
    const toggleMenu = () => setShow(!show)

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            px={[4,4,8,8]}
            py={4}
            bg={["green.500", "green.500", "whiteAlpha.50", "whiteAlpha.50"]}
            color={["whiteAlpha.900", "whiteAlpha.900", "green.500", "green.500"]}
            {...props}
        >
            <Flex align="center">
                <Image
                    w={['40px','40px','60px','60px']}
                    objectFit='cover'
                    src={Logo}
                    alt='logo-almadinah'
                />
                <Text as={'b'} pl={5} color={['whiteAlpha.900','green.500']}>AL Madinah Diwek Jombang</Text>
            </Flex>

                <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
                    {show ? <CloseIcon /> : <HamburgerIcon />}
                </Box>

                <Box
                    display={"block"}
                    flexBasis={{ base: "100%", md: "auto" }}
                >
                    <Collapse in={ breakpoint === 'base' ? show : true} unmountOnExit animateOpacity>
                        <Flex
                            align={["center", "center", "center", "center"]}
                            justify={["center", "space-between", "flex-end", "flex-end"]}
                            direction={["column", "row", "row", "row"]}
                            pt={[4, 4, 0, 0]}
                        >
                            <MenuItems to="/">Home</MenuItems>
                            <MenuItems to="#about">Tentang</MenuItems>
                            <MenuItems to="#facilities">Fasilitas </MenuItems>
                            <MenuItems to="#berita">Berita</MenuItems>
                            <MenuItems to="/psdb" isLast>
                                <Button
                                    size="sm"
                                    rounded="md"
                                    bg={["whiteAlpha.900", "whiteAlpha.900", "green.500", "green.500"]}
                                    color={["green.500", "green.500", "whiteAlpha.900", "whiteAlpha.900"]}
                                    _hover={{
                                        bg: [
                                            "gray.100",
                                            "gray.100",
                                            "gray.600",
                                            "gray.600",
                                        ],
                                    }}
                                >
                                    PSDB <ArrowForwardIcon/>
                                </Button>
                            </MenuItems>
                        </Flex>
                    </Collapse>
                </Box>
        </Flex>
    )
}

export default Header