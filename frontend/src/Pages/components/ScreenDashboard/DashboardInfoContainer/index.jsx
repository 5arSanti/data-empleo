import React from "react";

import { AppContext } from "../../../../Context";

import { AllInfoGridContainer } from "../../AllInfoContainer";
import { GraphContainer } from "../../GraphContainer";
import { DashboardGraphsGrid } from "../DashboardGraphsGrid";
import { DashboardInputsContainer } from "../DashboardInputsContainer";
import { WrapperContainer2 } from "../../WrapperContainers";
import { formatGraphValues } from "../../../../utils/formatGraphValues";

const DashboardInfoContainer = () => {
    const context = React.useContext(AppContext) 

    const graph = context.graphValues;

    const { graphValues } = context.responseData;

    const [keys, values] = graphValues ? formatGraphValues(graphValues) : [];

    graph.labels = keys ? keys : graph.labels;
    graph.values = values ? [values] : graph.values;

    return(
        <WrapperContainer2 flexDirection="column" gap={20} padding={0}>
            <AllInfoGridContainer className="grid-075-125">
                <DashboardInputsContainer/>
                {graph &&
                    <GraphContainer graph={graph}/>
                }
            </AllInfoGridContainer>

            <DashboardGraphsGrid/>
        </WrapperContainer2>
    );
}

export { DashboardInfoContainer };