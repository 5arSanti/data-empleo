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
import { DropCard } from "../../components/DropDownCards/DropCard/index.jsx";
import { icons } from "../../../utils/icons.jsx";
import axios from "axios";
import { AppContext } from "../../../Context/index.jsx";
import { handleNotifications } from "../../../utils/handleNotifications.js";
import { reloadLocation } from "../../../utils/realoadLocation.js";
import { SliderGrid } from "../../components/SliderScreen/SlidersGrid/index.jsx";
import { SliderForm } from "../../components/SliderScreen/SliderForm/index.jsx";

const SliderDataScreen = () => {

    return(
        <AuthWrapper>
            <Title>Informacion del Slider</Title>
            <AllInfoGridContainer>
                <SliderGrid/>
                <SliderForm/>
            </AllInfoGridContainer>
        </AuthWrapper>

    );
}

export { SliderDataScreen };