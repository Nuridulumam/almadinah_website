import * as React from 'react'
import { Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { theme } from './utils'

import Layout from "./component/Layout";
import Home from "./views/Home"
import News from "./views/Pages/News"
import NotFound from "./views/Pages/NotFound";
import PSDB from "./views/Pages/PSDB";

function App() {
  return (
      <ChakraProvider theme={extendTheme(theme)}>
          <Routes>
              <Route element={<Layout/>}>
                  <Route index element={<Home />}/>
                  <Route path={'/berita'} element={<News />}/>
                  <Route path={'/psdb'} element={<PSDB />}/>
              </Route>
              <Route path={"*"} element={<NotFound />}/>
          </Routes>
      </ChakraProvider>
  );
}

export default App;