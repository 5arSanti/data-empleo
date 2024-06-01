import React from "react";
import { AppContext } from "../../../../Context";

import { AllInfoContainer, AllInfoGridContainer } from "../../AllInfoContainer";
import { GraphContainer } from "../../GraphContainer";
import { MainTextContainer } from "../MainTextContainer";
import { PaginationButtons } from "../PaginationButtons";
import { TableContainer } from "../../TableContainer";

import { tableData } from "../../../../utils/tableData";
import { handleDownload, handleOpenFile } from "../../../../utils/downloadFile";


const HomeInfoContainer = () => {
    const context = React.useContext(AppContext)

    const array = context.graphValues;

    return(
        <AllInfoContainer>
            <AllInfoGridContainer>
                <MainTextContainer item={array}/>
                
                <GraphContainer array={array}/>
            </AllInfoGridContainer>

            <PaginationButtons/>
            <TableContainer title={"DataEmpleo"} values={tableData} onOpen={handleOpenFile} onDownload={handleDownload}/>
        </AllInfoContainer>
    );
}

export { HomeInfoContainer };