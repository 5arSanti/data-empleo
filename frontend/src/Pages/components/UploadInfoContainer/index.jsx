import { AllInfoGridContainer } from "../AllInfoContainer";
import { OptionInputCard } from "../InputsCards";
import { UploadForm } from "../UploadForm";
import { WrapperContainer1, WrapperContainer2 } from "../WrapperContainers";

const UploadInfoContainer = () => {
    return(
        <AllInfoGridContainer className="grid-1-1">
            <UploadForm/>

            <WrapperContainer2>
                <p>Placeholder</p>
            </WrapperContainer2>
        </AllInfoGridContainer>
    );
}

export { UploadInfoContainer };