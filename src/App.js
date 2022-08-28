import * as React from 'react'
import {Routes, Route} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import Layout from "./component/Layout";
import Home from "./views/Home"
import News from "./views/Pages/News"
import NotFound from "./views/Pages/NotFound";

function App() {
  return (
      <ChakraProvider>
          <Routes>
              <Route element={<Layout/>}>
                  <Route index element={<Home />}/>
                  <Route path={"/berita"} element={<News />}/>
                  <Route path={"*"} element={<NotFound />}/>
              </Route>
          </Routes>
      </ChakraProvider>
  );
}

export default App;