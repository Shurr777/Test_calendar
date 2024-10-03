import React from 'react';
import './App.css';
import AppRouter from "./componenets/AppRouter";
import Navbar from "./componenets/Navbar";
import {Layout} from "antd";

function App() {
    return (
        <Layout>
            <Navbar/>
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
        </Layout>
    );
}

export default App;
