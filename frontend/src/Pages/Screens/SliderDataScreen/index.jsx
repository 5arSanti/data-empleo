import { AllInfoGridContainer } from "../../components/AllInfoContainer";
import { AuthWrapper, IsAuthWrapper } from "../../components/AuthWrapper";
import { SliderForm } from "../../components/ScreenSliderData/SliderForm";
import { SliderGrid } from "../../components/ScreenSliderData/SlidersGrid";
import { Title } from "../../components/Title";

const SliderDataScreen = () => {

    return(
        <AuthWrapper>
            <IsAuthWrapper>
                <Title>Información del Slider</Title>
                <AllInfoGridContainer>
                    <SliderGrid/>
                    <SliderForm/>
                </AllInfoGridContainer>
            </IsAuthWrapper>
        </AuthWrapper>

    );
}

export { SliderDataScreen };