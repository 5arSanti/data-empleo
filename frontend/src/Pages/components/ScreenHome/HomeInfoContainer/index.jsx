import React from "react";
import { AppContext } from "../../../../Context";

import { AllInfoContainer, AllInfoGridContainer } from "../../AllInfoContainer";
import { GraphContainer } from "../../GraphContainer";
import { MainTextContainer } from "../MainTextContainer";
import { PaginationButtons } from "../PaginationButtons";
import { TableContainer } from "../../TableContainer";

import { handleDownloadFile, handleOpen } from "../../../../utils/downloadFile";
import { useNavigate } from "react-router-dom";
import { formatTableData } from "../../../../utils/formatTableData";


const HomeInfoContainer = ({data}) => {
    const context = React.useContext(AppContext)
    const navigate = useNavigate()

    const formattedData = formatTableData(data, "Home");

    const array = context.graphValues;

    return(
        <AllInfoContainer>
            <AllInfoGridContainer>
                <MainTextContainer item={array}/>
                
                <GraphContainer array={array}/>
            </AllInfoGridContainer>

            {/* <PaginationButtons/> */}
            <TableContainer 
                title={"DataEmpleo"} 
                values={formattedData}
                onOpen={handleOpen}
                onExcel={context.handleExcelFile}
                onDownload={handleDownloadFile}
                onDelete={context.deleteFile}
            />

        </AllInfoContainer>
    );
}

export { HomeInfoContainer };