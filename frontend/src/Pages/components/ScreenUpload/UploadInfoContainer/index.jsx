import { AllInfoGridContainer } from "../../AllInfoContainer";
import { WrapperContainer2 } from "../../WrapperContainers";
import { UploadForm } from "../UploadForm";

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