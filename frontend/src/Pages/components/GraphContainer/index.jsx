import { WrapperContainer1, WrapperContainer2 } from "../WrapperContainers";
import { Graph } from "./Graph";
import { SubTitle } from "../SubTitle";

import { months } from "../../../utils/dateFunctions";

import { graphValuesConfig } from "../../../utils/graphConfig";

const GraphContainer = ({graph={}, onConfig=graphValuesConfig, index=0}) => {
    const values = onConfig(graph);

    return(
        <WrapperContainer2 padding={20} flexDirection="column">
            <WrapperContainer1 flexDirection="column" gap={15}>
                <SubTitle textAlign="center">
                {graph?.title || graph?.TITULO_GRAFICA} - {months[graph?.month || graph?.MES]} del {graph?.year || graph?.ANO}
                </SubTitle>
                

                <Graph index={index} values={values}/>
            </WrapperContainer1>            
        </WrapperContainer2>
        
    );
}

export { GraphContainer };