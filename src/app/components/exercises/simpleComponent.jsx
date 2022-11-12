import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <>
            <button
                className="btn btn-primary"
                onClick={isAuth ? onLogOut : onLogin}
            >
                {isAuth ? "Выйти из системы" : "Войти"}
            </button>
        </>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func.isRequired,
    onLogOut: PropTypes.func.isRequired,
    isAuth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

export default SimpleComponent;
