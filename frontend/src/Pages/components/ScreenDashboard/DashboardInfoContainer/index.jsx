import React from "react";

import { AppContext } from "../../../../Context";

import { AllInfoGridContainer } from "../../AllInfoContainer";
import { GraphContainer } from "../../GraphContainer";
import { DashboardGraphsGrid } from "../DashboardGraphsGrid";
import { DashboardInputsContainer } from "../DashboardInputsContainer";
import { WrapperContainer2 } from "../../WrapperContainers";

const DashboardInfoContainer = () => {
    const context = React.useContext(AppContext) 

    const graph = context.graphValues;

    React.useEffect(() => {
        const filterParams = new URLSearchParams(context.dashboardFilters);
        const endpoints = [
            `graph/values?${filterParams.toString()}`,
        ]

        context.fetchData(endpoints);

    }, [context.dashboardFilters]);

    const { graphValues } = context.responseData;

    graph.year = context.dashboardFilters?.anio_coloca,
    graph.month = context.dashboardFilters?.mes_coloca,
    graph.labels = graphValues?.labels,
    graph.datasetLabel = graphValues?.datasetLabel,
    graph.graphValues = graphValues?.values


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