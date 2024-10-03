import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";


const Navbar: FC = () => {
    const navigate = useNavigate();
    const {isAuth} = useTypedSelector(state => state.auth)

    const handleLoginClick = () => {
        navigate(`${RouteNames.EVENT}`)
    }

    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth ?
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <div style={{color: 'white'}}>Username</div>
                        <Menu.Item onClick={()=>{console.log("Push")}} key={1}>Выход</Menu.Item>
                    </Menu>
                    :
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item onClick={handleLoginClick} key={1}>Логин</Menu.Item>
                    </Menu>
                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;