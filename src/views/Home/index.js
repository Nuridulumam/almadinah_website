import React from "react"

import Tentang from "./section/tentang";
import SectionTitle from "./section/sectionTitle";
import Jumbotron from "./section/jumbotron";
import Facility from "./section/facility";

export default function Home() {
    return (
        <>
            <Jumbotron />
            <SectionTitle
                title={'Tentang'}
                subtitle={'Ketahui lebih banyak tentang kami'}
                color={'green.500'}
            />
            <Tentang />
            <SectionTitle
                title={'Program'}
                subtitle={'Ketahui program yang ada di Pondok Pesantren Al-Madinah'}
                color={'green.500'}
            />
            <Facility/>
        </>
    )
}