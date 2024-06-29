import { graphLabels } from "./chartTypes";

const placeholderValues = [
    [250000, 200000, 150000, 250000, 200000, 150000, 75000],
    [400000, 100000, 320000, 350000, 100000, 300000, 500000],
]

const graphValuesConfig = (graph=[]) => {
    const values = {
        data: graph?.graphValues && graph?.graphValues || placeholderValues,
        labels: graph?.labels && graph?.labels || graphLabels[graph?.grapLabelsType]?.array,
        datasetLabel: graph?.datasetLabel && graph?.datasetLabel || [graph?.year, graph?.year - 1],
        options: {
            indexAxis: graph?.indexAxis,
            type: graph?.graphType,
        }
    }

    return values;
}

export { graphValuesConfig };