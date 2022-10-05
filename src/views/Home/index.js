import React from "react"

import Fasilitas from "./section/fasilitas";
import SectionTitle from "./section/sectionTitle";
import Jumbotron from "./section/jumbotron";

export default function Home() {
    return (
        <>
            <Jumbotron />
            <SectionTitle
                title={'Tentang'}
                subtitle={'Ketahui lebih banyak tentang kami'}
                color={'green.500'}
            />
            <Fasilitas />
        </>
    )
}