import React from 'react';
import './App.css';
import store from "./reduxs/store";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";


function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route path="/home" element={<Home/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
