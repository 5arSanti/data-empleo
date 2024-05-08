import React from "react";
import { handleInputChange } from "../../../utils/handleInputChange.js";
import { sliderData } from "../../../utils/sliderData";
import { AllInfoGridContainer } from "../../components/AllInfoContainer";
import { AuthWrapper } from "../../components/AuthWrapper";
import { InputCard2 } from "../../components/InputsCards";
import { SliderCard } from "../../components/SliderContainer/SliderCard.jsx";
import { SubTitle } from "../../components/SubTitle";
import { Title } from "../../components/Title";
import { WrapperContainer1, WrapperContainer2 } from "../../components/WrapperContainers";
import { ButtonCard } from "../../components/ButtonCard/index.jsx";

const SliderDataScreen = () => {
    const [values, setValues] = React.useState({
        name: null,
        numericValue: null,
        percentValue: null,
    })
    console.log(values);

    const buttonsOptions = [
        {
            id: "name",
            label: "Nombre",
            state: "name",
        },
        {
            id: "numeric-value",
            label: "Cantidad",
            state: "numericValue",
        },
        {
            id: "percent-value",
            label: "Porcentaje",
            state: "percentValue",
        },
    ]


    return(
        <AuthWrapper>
            <Title>Informacion del Slider</Title>
            <AllInfoGridContainer>
                <WrapperContainer2 flexDirection="column">
                    <SubTitle>Cartas del slider</SubTitle>

                    {sliderData.map((item, index) => (
                        <SliderCard key={index} item={item}/>
                    ))}
                </WrapperContainer2>
                <form>
                    <WrapperContainer1 flexDirection="column">
                        <SubTitle>Editar</SubTitle>
                        {buttonsOptions.map((item, index) => (
                            <InputCard2
                                key={index}
                                className="input-container"
                                id={item?.in}
                                label={`${item?.label}:`}
                                placeholder={item?.label}
                                onChange={(event) => {handleInputChange(item?.state, event, setValues)}}
                                defaultValue={values[item.state]}
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

            </AllInfoGridContainer>
        </AuthWrapper>

    );
}

export { SliderDataScreen };