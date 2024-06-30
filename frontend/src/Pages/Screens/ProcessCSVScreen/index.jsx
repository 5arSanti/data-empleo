import { AuthWrapper, IsAuthWrapper } from "../../components/AuthWrapper";
import { Title } from "../../components/Title";
import { WrapperContainer2 } from "../../components/WrapperContainers";
import { ProcessCSVInfoContainer } from "../../components/ScreenProcessCSV/ProcessCSVInfoContainer";

const ProcessCSVScreen = () => {
    return(
        <AuthWrapper>
            <IsAuthWrapper>
                <WrapperContainer2 flexDirection="column" padding={0} gap={5}>
                    <Title>Procesamiento de archivo de Colocaciones</Title>

                    <ProcessCSVInfoContainer/>
                </WrapperContainer2>
            </IsAuthWrapper>
        </AuthWrapper>
    )
}

export { ProcessCSVScreen };