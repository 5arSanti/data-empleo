import React from "react";
import { AppContext } from "../../../../Context";

import { AllInfoContainer, AllInfoGridContainer } from "../../AllInfoContainer";
import { GraphContainer } from "../../GraphContainer";
import { MainTextContainer } from "../MainTextContainer";
import { PaginationButtons } from "../PaginationButtons";
import { TableContainer } from "../../TableContainer";

import { handleDownloadFile, handleOpen } from "../../../../utils/downloadFile";
import { formatTableArray } from "../../../../utils/formatTableArray";
import { useNavigate } from "react-router-dom";


const HomeInfoContainer = ({data}) => {
    const context = React.useContext(AppContext)
    const navigate = useNavigate()

    const formattedData = formatTableArray(data);

    const array = context.graphValues;

    const handleExcelFile = (file, item) => {
        context.setPreviewFile({blob: file, name: item.array[0], item: item});
        navigate("/excel-preview")
    } 

    return(
        <AllInfoContainer>
            <AllInfoGridContainer>
                <MainTextContainer item={array}/>
                
                <GraphContainer array={array}/>
            </AllInfoGridContainer>

            <PaginationButtons/>
            <TableContainer 
                title={"DataEmpleo"} 
                values={formattedData}
                onOpen={handleOpen}
                onExcel={handleExcelFile}
                onDownload={handleDownloadFile}
            />

        </AllInfoContainer>
    );
}

export { HomeInfoContainer };