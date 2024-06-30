import { Title } from "../../components/Title";
import { AuthWrapper, IsAuthWrapper } from "../../components/AuthWrapper";
import { DashboardInfoContainer } from "../../components/ScreenDashboard/DashboardInfoContainer";


const DashboardScreen = () => {
    return (
        <AuthWrapper>
            <IsAuthWrapper>
                <Title>
                    Dashboard de DATAEMPLEO (¡En mantenimiento!)
                </Title>
                <DashboardInfoContainer/>
            </IsAuthWrapper>
        </AuthWrapper>
    );
}

export { DashboardScreen };