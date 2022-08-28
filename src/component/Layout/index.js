import React from "react"
import { Outlet } from "react-router-dom"
import { Flex } from "@chakra-ui/react"
import Header from "./Header"

export default function LandingLayout(props) {
    return (
        <Flex
            direction="column"
            align="center"
            maxW={{base: "auto", xl: "100%" }}
            m="0 auto"
            {...props}
        >
            <Header/>
            <Outlet />
        </Flex>
    )
}