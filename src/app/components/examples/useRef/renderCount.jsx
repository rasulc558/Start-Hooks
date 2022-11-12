import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const RenderCountExample = () => {
    const renderCount = useRef(0);

    const [otherState, setOtherState] = useState(false);

    useEffect(() => {
        renderCount.current++;
    });

    const toggleOtherState = () => {
        setOtherState(!otherState);
    };

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />

            <p>render count: {renderCount.current}</p>

            <button className="btn btn-primary" onClick={toggleOtherState}>
                toggle OtherState
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
