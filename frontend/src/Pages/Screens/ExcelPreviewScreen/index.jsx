import React from "react";
import { readExcelFile } from "../../../utils/readExcelFile";
import { Title } from "../../components/Title";
import { ExcelTable } from "../../components/ScreenExcelPreview/ExcelTable";
import { TextCard } from "../../components/TextComponents";
import { handleNotifications } from "../../../utils/handleNotifications";

const ExcelPreviewScreen = ({ file }) => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const loadData = async () => {
            try {
                const fileData = await readExcelFile(file?.blob);
                setData(fileData);
            } catch (err) {
                handleNotifications("error", `Error leyendo el archivo: ${err.message}`)
            }
        };
    
        loadData();
    }, [file.blob]);
  
    return (
        data.length > 0 ? 
            <>
                <Title>Previsualizando {file?.name}</Title>
                <ExcelTable data={data}/>
            </>

            :
            <TextCard>No hay datos disponibles</TextCard>
    );
}

export { ExcelPreviewScreen };