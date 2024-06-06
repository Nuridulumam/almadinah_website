import React from "react";

import Tentang from "./section/tentang";
import SectionTitle from "./section/sectionTitle";
import Jumbotron from "./section/jumbotron";
import Facility from "./section/facility";
import VisiMisi from "./section/visiMisi";

export default function Home() {
  return (
    <>
      <Jumbotron /> 
      <Tentang />
      <VisiMisi />
      <Facility />
    </>
  );
}
