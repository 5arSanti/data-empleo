import React from "react";
import { AppContext } from "../../../../Context";

import { AllInfoContainer, AllInfoGridContainer } from "../../AllInfoContainer";
import { GraphContainer } from "../../GraphContainer";
import { MainTextContainer } from "../MainTextContainer";
import { PaginationButtons } from "../PaginationButtons";
import { TableContainer } from "../../TableContainer";

import { handleDownloadFile, handleOpen } from "../../../../utils/downloadFile";
import { formatTableData } from "../../../../utils/formatTableData";
import { graphExportConfig } from "../../../../utils/graphConfig";
import { WrapperContainer2 } from "../../WrapperContainers";


const HomeInfoContainer = ({data}) => {
    const context = React.useContext(AppContext)

    const [graphIndex, setGraphIndex] = React.useState(0);

    const formattedData = formatTableData(data, "Home");

    const { graphs } = context.responseData?.graphsData || [];
    const graph = graphs ? graphs[graphIndex] : context.graphValues;

    return(
        <WrapperContainer2 flexDirection="column" padding={0} gap={5}>
            <AllInfoGridContainer>
                {graphs &&
                    <>
                        <MainTextContainer item={graph}/>
                        <GraphContainer graph={graph} onConfig={graphExportConfig}/>
                    </>
                }
            </AllInfoGridContainer>

            <PaginationButtons state={graphIndex} setState={setGraphIndex} length={graphs?.length}/>

            <TableContainer 
                title={"DataEmpleo"} 
                values={formattedData}
                onOpen={handleOpen}
                onExcel={context.handleExcelFile}
                onDownload={handleDownloadFile}
                onDelete={context.deleteFile}
            />

        </WrapperContainer2>
    );
}

export { HomeInfoContainer };