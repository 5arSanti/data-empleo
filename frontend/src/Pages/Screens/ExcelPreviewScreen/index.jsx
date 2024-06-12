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
import { VerifyLength } from "../../components/VerifyLengthWrapper";


const ExcelPreviewScreen = () => {
    const context = React.useContext(AppContext)
    const [data, setData] = React.useState(null);

    const loadData = async () => {
        context.setLoading(true);
        const fileData = JSON.parse(localStorage.getItem("excel-json"));
        setData(fileData[0]);
    };

    React.useEffect(() => {
        loadData() 
    }, []);
  
    return (
        <>
            {data ?
                <WrapperContainer2 flexDirection="column">
                    <Title>Previsualizando {data?.name}</Title>
                    
                    <ExcelIncorrectAndDownload onDownload={handleDownloadFile} file={data}/>

                    <VerifyLength array={data?.fileJSON}>
                        <ExcelTable data={data?.fileJSON}/>
                    </VerifyLength>

                </WrapperContainer2>
                :
                <TextCard>{"No se ha seleccionado ningun archivo a previsualizar"}</TextCard>
            }
        </>

    );
}

export { ExcelPreviewScreen };