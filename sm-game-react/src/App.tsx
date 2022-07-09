import React, {useEffect, useState} from 'react';
import './App.css';
import store from "./reduxs/store";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ConnectWallet from "./pages/ConnectWallet";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import SmartContractService from "./services/smart-contract-services";
import Game from "./pages/Game";
import ProtectedRoute from "./route/ProtectedRoute";

const theme = extendTheme({
    fonts: {
        heading: `'Montserrat', sans-serif`,
        body: `'Montserrat', sans-serif`,
    },
});

function App() {
    useEffect(()=>{
        SmartContractService.instance(store)
    },[])
    return (
        <ChakraProvider theme={theme}>
            <Provider store={store}>

                    <BrowserRouter>
                        <div className="App">
                            <Routes>
                                <Route element={<ProtectedRoute />}>
                                    <Route path="/" element={<Game/>}/>
                                </Route>
                                <Route path="/connect" element={<ConnectWallet />}/>
                            </Routes>
                        </div>
                    </BrowserRouter>
            </Provider>
        </ChakraProvider>
    );
}

export default App;
