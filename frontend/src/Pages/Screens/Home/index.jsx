import { Title } from "../../components/Title";
import { HomeInfoContainer } from "../../components/ScreenHome/HomeInfoContainer";

import { WrapperContainer2 } from "../../components/WrapperContainers";

import "./styles.css"

const Home = ({data}) => {
    return (

        <WrapperContainer2 flexDirection="column" padding={0}>
            <Title>
                DATAEMPLEO
            </Title>
            <HomeInfoContainer data={data}/>
        </WrapperContainer2>
    );
}

export { Home };