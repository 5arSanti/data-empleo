import axios from "axios";
import { handleNotifications } from "../../../../utils/handleNotifications";
import { reloadLocation } from "../../../../utils/realoadLocation";
import { AllInfoGridContainer } from "../../AllInfoContainer";
import { ButtonCard } from "../../ButtonCard";
import { DropCard } from "../../DropDownCards/DropCard";
import { InputCard2 } from "../../InputsCards";
import { SubTitle } from "../../SubTitle";
import { WrapperContainer1 } from "../../WrapperContainers";
import React from "react";
import { AppContext } from "../../../../Context";
import { icons } from "../../../../utils/icons";
import { handleInputChange } from "../../../../utils/handleInputChange";
import { SliderFormDropCard } from "../SliderFormDropCard";

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
        const values = {...context.sliderValues}

        axios.post(`${context.apiUri}/slider`, values)
            .then(response => {
                const {data} = response;

                if(data.Status === "Success") {
                    handleNotifications("success", "Datos guardados correctamente")
                    reloadLocation()
                } else {
                    handleNotifications("error", data.Error)
                }
            })
            .catch(err => {
                handleNotifications("error", err.message)
            })
    }

    return(
        <form onSubmit={handleNewSliderCard}>
            <WrapperContainer1 flexDirection="column">
                <SubTitle>Editar</SubTitle>
                {buttonsOptions.map((item, index) => (
                    <InputCard2
                        key={index}
                        className="input-container"
                        id={item?.in}
                        label={`${item?.label}:`}
                        placeholder={item?.label}
                        onChange={(event) => {handleInputChange(item?.state, event, context.setSliderValues)}}
                        defaultValue={context.sliderValues[item?.state]}
                    />
                ))}
                <SliderFormDropCard/>

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