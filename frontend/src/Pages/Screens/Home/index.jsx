import { Title } from "../../components/Title";
import { AuthWrapper } from "../../components/AuthWrapper";
import { HomeInfoContainer } from "../../components/ScreenHome/HomeInfoContainer";

import "./styles.css"

const Home = ({data}) => {
    return (
        <AuthWrapper>
            <Title>
                DATAEMPLEO
            </Title>
            <HomeInfoContainer data={data}/>
        </AuthWrapper>
    );
}

export { Home };