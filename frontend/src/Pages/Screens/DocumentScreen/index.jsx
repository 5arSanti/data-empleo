import { AuthWrapper, IsAuthWrapper } from '../../components/AuthWrapper';
import { DocumentInfoContainer } from '../../components/ScreenDocument/DocumentInfoContainer';

const DocumentScreen = () => {
    return(
        <AuthWrapper> 
            <IsAuthWrapper>
                <DocumentInfoContainer/>
            </IsAuthWrapper>
        </AuthWrapper>
    );
}

export { DocumentScreen };