import React from "react";

import "./styles.css";
import { AppContext } from "../../../../Context";
import { WrapperContainer2 } from "../../WrapperContainers";
import { SubTitle } from "../../SubTitle";


const MainTextContainer = ({item}) => {
    const context = React.useContext(AppContext)

    const { graphs } = context.responseData?.graphsData || [];

    return(
        <WrapperContainer2
            flexDirection="column"
            padding={0}
            gap={20}
        >
            <SubTitle>{item?.title || graphs?.[0]?.TITULO_GRAFICA}</SubTitle>

            <p className="main-text">{item?.description || graphs?.[0]?.DESCRIPCION}</p>
        </WrapperContainer2>
    );
}
export { MainTextContainer };