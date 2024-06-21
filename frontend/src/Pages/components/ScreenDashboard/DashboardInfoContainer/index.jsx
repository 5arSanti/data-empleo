import React from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../../../../Context";

import { AllInfoContainer, AllInfoGridContainer } from "../../AllInfoContainer";
import { GraphContainer } from "../../GraphContainer";
import { ButtonCard } from "../../ButtonCard";
import { graphValuesConfig } from "../../../../utils/graphConfig";
import { DashboardGraphsGrid } from "../DashboardGraphsGrid";
import { DashboardInputsContainer } from "../DashboardInputsContainer";
import { DashboardGraphsPagination } from "../DashboardGraphsPagination";
import { WrapperContainer2 } from "../../WrapperContainers";

const DashboardInfoContainer = () => {
    const context = React.useContext(AppContext)
    const navigate = useNavigate();    

    const graph = context.graphValues;

    return(
        <WrapperContainer2 flexDirection="column" gap={20} padding={0}>
            <AllInfoGridContainer className="grid-075-125">
                <DashboardInputsContainer/>
                {graph &&
                    <GraphContainer graph={graph}/>
                }
            </AllInfoGridContainer>

            <DashboardGraphsGrid/>
            <DashboardGraphsPagination/>
            
        </WrapperContainer2>
    );
}

export { DashboardInfoContainer };