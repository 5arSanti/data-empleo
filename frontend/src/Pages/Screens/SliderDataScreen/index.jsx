import { AllInfoGridContainer } from "../../components/AllInfoContainer";
import { AuthWrapper } from "../../components/AuthWrapper";
import { SliderForm } from "../../components/ScreenSliderData/SliderForm";
import { SliderGrid } from "../../components/ScreenSliderData/SlidersGrid";
import { Title } from "../../components/Title";

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