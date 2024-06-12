import { WrapperContainer2 } from "../../WrapperContainers";
import { SubTitle } from "../../SubTitle";

import "./styles.css";


const MainTextContainer = ({item}) => {
    return(
        <WrapperContainer2
            flexDirection="column"
            padding={0}
            gap={20}
        >
            <SubTitle>{item?.title || item?.TITULO_GRAFICA}</SubTitle>

            <p className="main-text">{item?.description || item?.DESCRIPCION}</p>
        </WrapperContainer2>
    );
}
export { MainTextContainer };