import React from "react"
import { Outlet } from "react-router-dom"
import { Flex } from "@chakra-ui/react"
import Header from "./Header"
import Footer from "./Footer";

export default function LandingLayout(props) {
    return (
        <>
            <Header/>
                <Flex
                    direction="column"
                    align="center"
                    maxW={{base: "auto", xl: "100%" }}
                    m="0 auto"
                    {...props}
                >
                    <Outlet />
                </Flex>
            <Footer />
        </>
    )
}