import { Title } from "../../components/Title";
import { AuthWrapper } from "../../components/AuthWrapper";
import { UploadInfoContainer } from "../../components/ScreenUpload/UploadInfoContainer";
import React from "react";
import { scrollToValue } from "../../../utils/scrollToValue";


const UploadScreen = () => {
    React.useEffect(() => {
        scrollToValue(0, 350)
    }, [])

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