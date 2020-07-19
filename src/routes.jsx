import React from "react";
import {Router} from "@reach/router";
import {App} from "./App.jsx";
import ItemListPage from "./views/itemList/itemList.jsx";

function Routes(){

    return (
        <Router>
            <App path="/">
               <ItemListPage path="/" />
               
            </App>
        </Router>
    )
}

export {Routes}