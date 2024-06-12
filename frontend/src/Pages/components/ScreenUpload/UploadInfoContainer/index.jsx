import { AllInfoGridContainer } from "../../AllInfoContainer";
import { WrapperContainer1, WrapperContainer2 } from "../../WrapperContainers";
import { UploadForm } from "../UploadForm";

const UploadInfoContainer = () => {
    return(
        <AllInfoGridContainer className="grid-1-1">
            <UploadForm/>

            {/* <WrapperContainer2 alignItems="start">
                <WrapperContainer1>
                    
                </WrapperContainer1>
            </WrapperContainer2> */}
        </AllInfoGridContainer>
    );
}

export { UploadInfoContainer };