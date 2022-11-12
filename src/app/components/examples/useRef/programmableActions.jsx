import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const ProgrammableActionsExample = () => {
    const inputRef = useRef();

    const handleClick = () => {
        console.log(inputRef.current.clientWidth);
        inputRef.current.focus();
    };

    const handleClickWidth = () => {
        inputRef.current.style.width = "100px";
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />

            <label htmlFor="email" className="form-label">
                Email
            </label>

            <input
                ref={inputRef}
                type="email"
                className="form-control"
                id="email"
            />

            <button onClick={handleClick}>Фокус</button>
            <button onClick={handleClickWidth}>Изменить ширину</button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
