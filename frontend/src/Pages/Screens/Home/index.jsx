import { Title } from "../../components/Title";
import { AuthWrapper } from "../../components/AuthWrapper";
import { HomeInfoContainer } from "../../components/ScreenHome/HomeInfoContainer";

import "./styles.css"
import { WrapperContainer2 } from "../../components/WrapperContainers";

const Home = ({data}) => {
    return (
        <AuthWrapper>
            <WrapperContainer2 flexDirection="column" padding={0}>
                <Title>
                    DATAEMPLEO
                </Title>
                <HomeInfoContainer data={data}/>
            </WrapperContainer2>
        </AuthWrapper>
    );
}

export { Home };