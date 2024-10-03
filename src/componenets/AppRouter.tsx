import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {

    const {isAuth} = useTypedSelector(state => state.auth)

    return (
        isAuth ?
            <Routes>
                {privateRoutes.map((route, index) => (
                    <Route key={index}
                           path={route.path}
                           element={<route.component/>}
                    />
                ))}
            </Routes>
            :
            <Routes>
                {publicRoutes.map((route, index) => (
                    <Route key={index}
                           path={route.path}
                           element={<route.component/>}
                    />
                ))}
            </Routes>

    );
};

export default AppRouter;