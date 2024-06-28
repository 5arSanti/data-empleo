import { Title } from "../../components/Title";
import { AuthWrapper } from "../../components/AuthWrapper";
import { DashboardInfoContainer } from "../../components/ScreenDashboard/DashboardInfoContainer";


const DashboardScreen = () => {
    return (
        <AuthWrapper>
            <Title>
                Dashboard de DATAEMPLEO (¡En mantenimiento!)
            </Title>
            <DashboardInfoContainer/>
        </AuthWrapper>
    );
}

export { DashboardScreen };