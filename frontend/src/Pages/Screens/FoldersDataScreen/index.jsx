import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { TableContainer } from "../../components/TableContainer";
import { formatURL } from "../../../utils/strings";
import { handleDownloadFile, handleOpen } from "../../../utils/downloadFile";
import { AppContext } from "../../../Context";
import { formatTableArray } from "../../../utils/formatTableArray";

const FoldersDataScreen = ({ data }) => {
    const context = React.useContext(AppContext)
    
    const navigate = useNavigate();

    const { category } = useParams() || "";
    
    const categoryData = data ? data[formatURL(category)] : [];

    const formattedData = formatTableArray(categoryData);

    const handleExcelFile = (file, item) => {
        context.setPreviewFile({blob: file, name: item.array[0], item: item});
        navigate("/excel-preview");
    } 

  
    return (
        <TableContainer 
            title={formatURL(category)} 
            values={formattedData}
            onOpen={handleOpen}
            onExcel={handleExcelFile}
            // onExcel={() => window.open("/excel-preview", '_blank', 'rel=noopener noreferrer')}
            onDownload={handleDownloadFile}
        />
    );
}

export { FoldersDataScreen };