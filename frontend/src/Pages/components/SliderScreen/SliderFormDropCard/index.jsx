import React from "react";
import { AppContext } from "../../../../Context";
import { handleInputChange } from "../../../../utils/handleInputChange";
import { icons } from "../../../../utils/icons";
import { AllInfoGridContainer } from "../../AllInfoContainer";
import { DropCard } from "../../DropDownCards/DropCard";
import { WrapperContainer1 } from "../../WrapperContainers";

const SliderFormDropCard = () => {
    const context = React.useContext(AppContext)

    return(
        <AllInfoGridContainer className="grid-05-15">
            {context.sliderValues.ICONO && 
                <WrapperContainer1 justifyContent="center" padding={15}>
                    {icons[context.sliderValues?.ICONO]}
                </WrapperContainer1>
            }

            <DropCard title={"Iconos"} object={icons} onClick={(event) => handleInputChange("ICONO", event, context.setSliderValues)}/>
            

        </AllInfoGridContainer>
    );
}

export { SliderFormDropCard }; 