import { Title } from "../../components/Title";
import { AuthWrapper, IsAuthWrapper } from "../../components/AuthWrapper";
import { UploadInfoContainer } from "../../components/ScreenUpload/UploadInfoContainer";

const UploadScreen = () => {
    return (
        <AuthWrapper>
            <IsAuthWrapper>
                <Title>
                    Carga de Archivos para Publicación
                </Title>
                <UploadInfoContainer/>
            </IsAuthWrapper>
        </AuthWrapper>
    );
}

export { UploadScreen };