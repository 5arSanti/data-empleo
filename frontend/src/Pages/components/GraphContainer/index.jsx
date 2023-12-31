import React from "react";
import { AppContext } from "../../../Context";
import { WrapperContainer1 } from "../WrapperContainers";
import { Graph } from "./Graph";
import { SubTitle } from "../SubTitle";


const GraphContainer = () => {
    const context = React.useContext(AppContext);

    const chartData = [
        [context.responseData.total, 200000, 150000],
        [400000, 100000, 320000],
    ];
    const chartLabels = ['Ofertas de Empleo Activas', 'Buscadores de Empleo Activos', 'Colocaciones'];
    const chartDatasetLabel = [2023, 2022];

    return(
        <WrapperContainer1 flexDirection="column" gap={15}>
            <SubTitle textAlign="center">
                Grafica de  los Resultados Principales - Noviembre 2023
            </SubTitle>
            
            <Graph data={chartData} labels={chartLabels} datasetLabel={chartDatasetLabel}/>
        </WrapperContainer1>
    );
}

export { GraphContainer };