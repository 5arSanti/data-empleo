import { AuthWrapper } from "../../components/AuthWrapper";
import { Title } from "../../components/Title";
import { WrapperContainer2 } from "../../components/WrapperContainers";
import { ProcessCSVInfoContainer } from "../../components/ScreenProcessCSV/ProcessCSVInfoContainer";

const ProcessCSVScreen = () => {
    return(
        <AuthWrapper>
            <WrapperContainer2 flexDirection="column" padding={0} gap={5}>
                <Title>Procesamiento de archivo de Colocaciones</Title>

                <ProcessCSVInfoContainer/>
            </WrapperContainer2>
        </AuthWrapper>
    )
}

export { ProcessCSVScreen };