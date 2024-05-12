import { Title } from "../../components/Title";
import { AuthWrapper } from "../../components/AuthWrapper";
import { UploadInfoContainer } from "../../components/ScreenUpload/UploadInfoContainer";


const UploadScreen = () => {

    return (
        <AuthWrapper>
            <Title>
                Carga de Archivos para Publicación
            </Title>
            <UploadInfoContainer/>
            
        </AuthWrapper>
    );
}

export { UploadScreen };