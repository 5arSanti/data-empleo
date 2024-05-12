import React from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../../../../Context";

import { AllInfoContainer, AllInfoGridContainer } from "../../AllInfoContainer";
import { GraphContainer } from "../../GraphContainer";
import { ButtonCard } from "../../ButtonCard";
import { graphValuesConfig } from "../../../../utils/graphConfig";
import { DashboardGraphsGrid } from "../DashboardGraphsGrid";
import { DashboardInputsContainer } from "../DashboardInputsContainer";

const DashboardInfoContainer = () => {
    const context = React.useContext(AppContext)
    const navigate = useNavigate();    

    const array = context.graphValues;

    return(
        <AllInfoContainer>
            <AllInfoGridContainer className="grid-075-125">
                <DashboardInputsContainer/>
                
                <GraphContainer array={array}/>
            </AllInfoGridContainer>

            <ButtonCard
                title="Ir a generar un nuevo boletin"
                onClick={() => navigate("/document")}
            >
                Generar Boletin
            </ButtonCard>

            <DashboardGraphsGrid/>
            
        </AllInfoContainer>
    );
}

export { DashboardInfoContainer };