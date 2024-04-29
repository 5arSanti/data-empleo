import { Title } from "../../components/Title";
import { DateCard } from "../../components/DateCard";
import { DashboardInfoContainer } from "../../components/DashboardInfoContainer";
import { AuthWrapper } from "../../components/AuthWrapper";
import { UploadInfoContainer } from "../../components/UploadInfoContainer";


const UploadScreen = () => {

    return (
        <AuthWrapper>
            <DateCard/>

            <Title>
                Carga de Archivos para Publicación
            </Title>
            <UploadInfoContainer/>
            
        </AuthWrapper>
    );
}

export { UploadScreen };