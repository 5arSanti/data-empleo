import { useParams } from "react-router-dom";

import { TableContainer } from "../../components/TableContainer";
import { AuthWrapper } from "../../components/AuthWrapper";
import { formatURL } from "../../../utils/strings";

const FoldersDataScreen = ({data}) => {
    const { category } = useParams() || "";
    const categoryData = data ? data[formatURL(category)] : [];

    const formattedData = categoryData.map((item) => ({
        array: [item?.name, item?.date, 'Abrir', 'Descargar'],
        file: item,
        link: item.fileType == 'pdf' ? null : `https://example.com/${item}`,
      }));
  
    return (
        <AuthWrapper>
            <TableContainer title={formatURL(category)} values={formattedData}/>

        </AuthWrapper>
    );
}

export { FoldersDataScreen };