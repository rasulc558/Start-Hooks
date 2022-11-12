import React from "react";

import CardWrapper from "../common/Card";

const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("token");

    const handleLogin = () => {
        localStorage.setItem("token", "true");
        console.log("LogIn", localStorage);
    };

    const handleLogOut = () => {
        localStorage.removeItem("token");
        console.log("LogOut", localStorage);
    };

    return (
        <CardWrapper>
            <Component
                {...props}
                onLogin={handleLogin}
                onLogOut={handleLogOut}
                isAuth={isAuth}
            />
        </CardWrapper>
    );
};

export default withFunctions;
