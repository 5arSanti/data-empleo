import React from "react";
import { AppContext } from "../../../Context";
import { WrapperContainer1, WrapperContainer2 } from "../WrapperContainers";
import { Graph } from "./Graph";
import { SubTitle } from "../SubTitle";

import { months } from "../../../utils/dateFunctions";

import { graphValuesConfig } from "../../../utils/graphConfig";

const GraphContainer = ({graph, onConfig=graphValuesConfig}) => {
    const values = onConfig(graph);

    return(
        <WrapperContainer2 padding={0} flexDirection="column">
            <WrapperContainer1 flexDirection="column" gap={15}>
                <SubTitle textAlign="center">
                {graph?.title || graph?.TITULO_GRAFICA} - {months[graph?.month || graph?.MES]} del {graph?.year || graph?.ANO}
                </SubTitle>
                
                <Graph values={values}/>
            </WrapperContainer1>            
        </WrapperContainer2>
        
    );
}

export { GraphContainer };