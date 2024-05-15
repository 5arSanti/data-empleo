import { graphExportConfig } from "../../../../utils/graphConfig";
import { Graph } from "../../GraphContainer/Graph";
import { WrapperContainer1 } from "../../WrapperContainers";

const DocumentGraphsGrid = ({item, index}) => {
    const values = graphExportConfig(item);

    return (
        <WrapperContainer1 key={index} padding={5} flexDirection="column">
            <Graph index={index} values={values} />
        </WrapperContainer1>
    );
}

export { DocumentGraphsGrid };