import React from "react";
import { AppContext } from "../../../../Context";
import { WrapperContainer2 } from "../../WrapperContainers";
import { SubTitle } from "../../SubTitle/index.jsx";
import { SliderCardOptions } from "../SliderCardOptions/index.jsx";

const SliderGrid = () => {
    const context = React.useContext(AppContext);

    return(
        <WrapperContainer2 flexDirection="column">
            <SubTitle>Cartas del slider</SubTitle>

            {context.responseData?.sliderData?.map((item, index) => (
                <SliderCardOptions key={index} item={item} onEdit={context.setSliderValues}/>
            ))}
        </WrapperContainer2>
    );
}

export { SliderGrid };