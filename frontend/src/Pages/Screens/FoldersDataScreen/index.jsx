import React from "react";
import { useParams } from "react-router-dom";

import { TableContainer } from "../../components/TableContainer";
import { formatURL } from "../../../utils/strings";
import { handleDownloadFile, handleOpen } from "../../../utils/downloadFile";
import { formatTableData } from "../../../utils/formatTableData";
import { AppContext } from "../../../Context";

const FoldersDataScreen = ({ data }) => {
    const context = React.useContext(AppContext)

    const { category } = useParams() || "";

    const formattedData = formatTableData(data, category);

  
    return (
        <TableContainer 
            title={formatURL(category)} 
            values={formattedData}
            onOpen={handleOpen}
            onExcel={context.handleExcelFile}
            onDownload={handleDownloadFile}
            onDelete={context.deleteFile}
        />
    );
}

export { FoldersDataScreen };