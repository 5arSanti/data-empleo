import { useNavigate, useParams } from "react-router-dom";

import { TableContainer } from "../../components/TableContainer";
import { formatURL } from "../../../utils/strings";
import { handleDownload, handleOpenFile } from "../../../utils/downloadFile";
import { handleGetFile } from "../../../utils/handleData/handleGetFile";
import { handleNotifications } from "../../../utils/handleNotifications";
import React from "react";
import { AppContext } from "../../../Context";

const FoldersDataScreen = ({ data }) => {
    const context = React.useContext(AppContext)
    const navigate = useNavigate();

    const { category } = useParams() || "";
    const categoryData = data ? data[formatURL(category)] : [];


    const formattedData = categoryData.map((item) => ({
        array: [item?.name, item?.date, 'Abrir', 'Descargar'],
        file: item?.fullName,
        link: `file/${item?.selectedOption}/${item?.fullName}/${item?.name}`,
        fileType: item?.fileType, 
    }));

    const handleOpen = async (item) => {
        try {
            const file = await handleGetFile(item?.link)
            const url = window.URL.createObjectURL(file);

            const validateType = {
                "pdf": () => { window.open(url, '_blank') },
                "xlsx": () => {
                    context.setPreviewFile({blob: file, name: item.array[0]});
                    navigate("/excel-preview")
                 },
            }
            validateType[item?.fileType]();
            
        } 
        catch (err) {
            handleNotifications("error", err.message);
        }
    }

    const handleDownloadFile = async (item) => {
        try {
            const file = await handleGetFile(item.link)
            const url = window.URL.createObjectURL(file);
        
            handleDownload(url, item.array[0])
        } 
        catch (err) {
            handleNotifications("error", err.message);
        }
    }
  
    return (
        <TableContainer 
            title={formatURL(category)} 
            values={formattedData}
            onOpen={handleOpen}
            onDownload={handleDownloadFile}
        />
    );
}

export { FoldersDataScreen };