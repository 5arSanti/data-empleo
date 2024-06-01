import { useParams } from "react-router-dom";

import { TableContainer } from "../../components/TableContainer";
import { formatURL } from "../../../utils/strings";
import { api } from "../../../utils/api";
import { handleDownload, handleOpenFile } from "../../../utils/downloadFile";

const FoldersDataScreen = ({data}) => {
    const { category } = useParams() || "";
    const categoryData = data ? data[formatURL(category)] : [];

    const formattedData = categoryData.map((item) => ({
        array: [item?.name, item?.date, 'Abrir', 'Descargar'],
        file: item?.fullName,
        link: `${api}/file/${item?.selectedOption}/${item?.fullName}/${item?.name}`,
        fileType: item?.fileType, 
    }));
  
    return (
        <>
            <TableContainer title={formatURL(category)} values={formattedData} onOpen={handleOpenFile} onDownload={handleDownload}/>
        </>
    );
}

export { FoldersDataScreen };