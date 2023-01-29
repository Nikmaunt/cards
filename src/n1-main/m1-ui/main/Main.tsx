import React from 'react';
import Header from "../header/Header";
import Pages from "../routes/Pages";
import {HashRouter} from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Header/>
            <HashRouter>
                <Pages/>
            </HashRouter>
        </div>
    );
};

export default Main;