import { Title } from "../../components/Title";
import { AuthWrapper } from "../../components/AuthWrapper";
import { HomeInfoContainer } from "../../components/ScreenHome/HomeInfoContainer";

import "./styles.css"

const Home = () => {
    return (
        <AuthWrapper>
            <Title>
                DATAEMPLEO
            </Title>
            <HomeInfoContainer/>
        </AuthWrapper>
    );
}

export { Home };