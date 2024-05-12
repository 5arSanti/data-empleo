import React from "react";
import { ButtonCard } from "../../ButtonCard";
import { InputCard } from "../../InputsCards";
import { SubTitle } from "../../SubTitle";
import { WrapperContainer1 } from "../../WrapperContainers";
import { AppContext } from "../../../../Context";
import { handleInputChange } from "../../../../utils/handleInputChange";
import { SliderFormDropCard } from "../SliderFormDropCard";
import { handlePostData } from "../../../../utils/handleData/handlePostData";

const SliderForm = () => {
    const context = React.useContext(AppContext);

    const buttonsOptions = [
        {
            id: "name",
            label: "Nombre",
            state: "NOMBRE",
        },
        {
            id: "numeric-value",
            label: "Cantidad",
            state: "VALOR",
        },
        {
            id: "percent-value",
            label: "Porcentaje",
            state: "PORCENTAJE",
        },
    ]

    const handleNewSliderCard = async (event) => {
        event.preventDefault()
        const data = {...context.sliderValues}

        handlePostData(event, data, "/slider");
    }

    return(
        <form onSubmit={handleNewSliderCard}>
            <WrapperContainer1 flexDirection="column">
                <SubTitle>Slider</SubTitle>
                
                <SliderFormDropCard/>

                {buttonsOptions.map((item, index) => (
                    <InputCard
                        key={index}
                        className="input-container"
                        id={item?.in}
                        label={`${item?.label}:`}
                        placeholder={item?.label}
                        onChange={(event) => {handleInputChange(item?.state, event, context.setSliderValues)}}
                        defaultValue={context.sliderValues[item?.state]}
                    />
                ))}

                <ButtonCard
                    title="Guardar Información"
                    type="submit"
                >
                    Guardar Información
                </ButtonCard>
            </WrapperContainer1>
        </form>
    );
}

export { SliderForm };