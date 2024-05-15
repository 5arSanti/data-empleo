import { AuthWrapper } from '../../components/AuthWrapper';
import { DocumentInfoContainer } from '../../components/ScreenDocument/DocumentInfoContainer';

const DocumentScreen = () => {
    return(
        <AuthWrapper>  
            <DocumentInfoContainer/>
        </AuthWrapper>
    );
}

export { DocumentScreen };