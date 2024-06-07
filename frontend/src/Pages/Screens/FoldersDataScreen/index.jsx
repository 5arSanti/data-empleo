import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { TableContainer } from "../../components/TableContainer";
import { formatURL } from "../../../utils/strings";
import { handleDownloadFile, handleOpen } from "../../../utils/downloadFile";
import { formatTableData } from "../../../utils/formatTableData";
import { AppContext } from "../../../Context";

const FoldersDataScreen = ({ data }) => {
    const context = React.useContext(AppContext)
    
    const navigate = useNavigate();

    const { category } = useParams() || "";

    const formattedData = formatTableData(data, category);


    const handleExcelFile = (file, item) => {
        context.setPreviewFile({ blob: file, name: item.array[0], item: item });
        navigate("/excel-preview");
    }

  
    return (
        <TableContainer 
            title={formatURL(category)} 
            values={formattedData}
            onOpen={handleOpen}
            onExcel={handleExcelFile}
            onDownload={handleDownloadFile}
            onDelete={context.deleteFile}
        />
    );
}

export { FoldersDataScreen };