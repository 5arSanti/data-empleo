import { AuthWrapper } from "../../components/AuthWrapper";
import { UsersInfoContainer } from "../../components/ScreenUsers/UsersInfoContainer";
import { Title } from "../../components/Title";

const UsersScreen = () => {
    return(
        <AuthWrapper>
            <Title>Usuarios</Title>
            <UsersInfoContainer/>
        </AuthWrapper>
    );
}

export { UsersScreen };