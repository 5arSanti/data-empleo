import React from "react";
import axios from "axios";

import { AppContext } from "../../../../Context";
import { WrapperContainer2 } from "../../WrapperContainers";
import { SubTitle } from "../../SubTitle/index.jsx";
import { SliderCardOptions } from "../SliderCardOptions/index.jsx";
import { handleNotifications } from "../../../../utils/handleNotifications.js";
import { reloadLocation } from "../../../../utils/realoadLocation.js";

const SliderGrid = () => {
    const context = React.useContext(AppContext);

    const handleSliderCardEdit = (item) => {
        context.setEditingSliderCard(true);
        handleNotifications("info", `Editando informacion de ${item.NOMBRE}`)

        context.setSliderValues(item)

        document.documentElement.scrollTo(0, 335)
    }

    const handleSliderCardDelete = (item) => {
        axios.delete(`${context.apiUri}/slider`, {
            data: { id: item.id }
        })
        .then(response => {
            const {data} = response;

            if(data.Status === "Success") {
                handleNotifications("success", "Eliminado Correctamente")
                reloadLocation()
            } else {
                handleNotifications("error", data.Error);
            }
        })
        .catch(err => {handleNotifications("error", err)})
    }

    return(
        <WrapperContainer2 flexDirection="column">
            <SubTitle>Cartas del slider</SubTitle>

            {context.responseData?.sliderData?.map((item, index) => (
                <SliderCardOptions key={index} item={item} onDelete={() => handleSliderCardDelete(item)} onEdit={() => handleSliderCardEdit(item)}/>
            ))}
        </WrapperContainer2>
    );
}

export { SliderGrid };