import React from "react";
import { useParams } from "react-router-dom";

import { TableContainer } from "../../components/TableContainer";
import { formatURL } from "../../../utils/strings";
import { handleDownloadFile, handleOpen } from "../../../utils/downloadFile";
import { formatTableData } from "../../../utils/formatTableData";
import { AppContext } from "../../../Context";
import { Title } from "../../components/Title";

const FoldersDataScreen = ({ data }) => {
    const context = React.useContext(AppContext)

    const { category } = useParams() || "";

    const subFolders = formatTableData(data, category);

    const subFoldersName = Object.keys(subFolders) || [];
  
    return (
        <>
            <Title>{formatURL(category)}</Title>

            {subFoldersName?.map((item, index) => (

                <TableContainer 
                    key={index}
                    title={item} 
                    values={subFolders[item]}
                    onOpen={handleOpen}
                    onExcel={context.handleExcelFile}
                    onDownload={handleDownloadFile}
                    onDelete={context.deleteFile}
                />

            ))}
        </>

    );
}

export { FoldersDataScreen };