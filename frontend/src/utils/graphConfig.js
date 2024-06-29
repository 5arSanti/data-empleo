import { graphLabels } from "./chartTypes";

const placeholderValues = [
    [250000, 200000, 150000, 250000, 200000, 150000, 75000],
    [400000, 100000, 320000, 350000, 100000, 300000, 500000],
]

const graphExportConfig = (graph=[]) => {
    const values = {
        data: graph.DATOS || placeholderValues,
        labels: graphLabels[graph?.TIPO_DATOS]?.array,
        datasetLabel: [graph?.AÑO, graph?.AÑO - 1], 
        options: {
            indexAxis: graphLabels[graph?.TIPO_DATOS]?.indexAxis,
            type: graph?.TIPO_GRAFICA, 
        }
    };

    return values;
}

const graphValuesConfig = (graph=[]) => {
    const values = {
        data: graph?.values || placeholderValues,
        labels: graph?.labels || graphLabels[graph?.grapLabelsType]?.array,
        datasetLabel: graph?.datasetLabel || [graph?.year, graph?.year - 1],
        options: {
            indexAxis: graph?.indexAxis,
            type: graph?.graphType,
        }
    }

    return values;
}

export { graphExportConfig, graphValuesConfig };