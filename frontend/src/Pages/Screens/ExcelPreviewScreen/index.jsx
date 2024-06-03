import React from "react";

import { readExcelFile } from "../../../utils/readExcelFile";
import { Title } from "../../components/Title";
import { ExcelTable } from "../../components/ScreenExcelPreview/ExcelTable";
import { TextCard } from "../../components/TextComponents";
import { handleNotifications } from "../../../utils/handleNotifications";
import { WrapperContainer2 } from "../../components/WrapperContainers";
import { handleDownloadFile } from "../../../utils/downloadFile";
import { ExcelIncorrectAndDownload } from "../../components/ScreenExcelPreview/ExcelIncorrectAndDownloadCard";
import { AppContext } from "../../../Context";


const ExcelPreviewScreen = ({ file }) => {
    const context = React.useContext(AppContext)
    const [data, setData] = React.useState([]);

    const loadData = async () => {
        try {
            context.setLoading(true);

            const fileData = await readExcelFile(file?.blob);
            setData(fileData);
        } catch (err) {
            handleNotifications("error", `Error leyendo el archivo: ${err.message}`)
        } finally {
            context.setLoading(false);
        }
    };

    React.useEffect(() => {
        if (file) { loadData() }

    }, [file]);
  
    return (
        file ?
            <WrapperContainer2 flexDirection="column">
                <Title>Previsualizando {file?.name}</Title>
                <ExcelIncorrectAndDownload onDownload={handleDownloadFile} file={file}/>
                {data.length > 0 ? 
                    <ExcelTable data={data}/>
                    :
                    <TextCard>No hay datos disponibles</TextCard>
                }
            </WrapperContainer2>
            :
            <TextCard>{"No se ha seleccionado ningun archivo a previsualizar"}</TextCard>
    );
}

export { ExcelPreviewScreen };