import React from "react";
import { AppContext } from "../../../../Context";
import { getMonthsUntilCurrent, months, yearArray } from "../../../../utils/dateFunctions";
import { AllInfoGridContainer } from "../../AllInfoContainer";
import { WrapperContainer2 } from "../../WrapperContainers";
import { SubTitle } from "../../SubTitle";
import { OptionInputCard } from "../../InputsCards";
import { handleInputChange } from "../../../../utils/handleInputChange";
import { MyExportPDFDocument } from "../MyExportPDFDocument";
import { ButtonCard } from "../../ButtonCard";
import { handleNotifications } from "../../../../utils/handleNotifications";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";


const DocumentPDFFiltersViewer = ({array, graphImages}) => {
    const context = React.useContext(AppContext)

    const monthsArray = Object.keys(getMonthsUntilCurrent(context.filters?.AÑO));
    const year = context.filters?.AÑO;
    const month = context.filters?.MES;

    return(
        <AllInfoGridContainer className="grid-125-075">
            <WrapperContainer2
                flexDirection="column"
                padding={0}
                justifyContent="center"
            >
                <SubTitle>Crear documento (En Desarrollo)</SubTitle>
                <OptionInputCard
                    id={"export-year"} 
                    label={"Año"} 
                    array={yearArray}
                    onChange={(event) => handleInputChange("AÑO", event, context.setFilters)}
                    defaultValue={context.filters?.AÑO}
                />
                <OptionInputCard
                    id={"export-month"} 
                    label={"Mes"} 
                    array={monthsArray}
                    onChange={(event) => handleInputChange("MES", event, context.setFilters)}
                    defaultValue={context.filters?.MES}
                />

                <PDFDownloadLink document={<MyExportPDFDocument array={array} graphs={graphImages || []} year={year} month={month}/>} fileName={`Boletin-Demanda-${months[month]}-${year}`}>
                    {({loading}) => ((loading) ? 
                        <ButtonCard onClick={() => {
                            handleNotifications("info", "El documento esta siendo Procesado")
                        }}>Cargando Documento</ButtonCard>
                        : 
                        <ButtonCard onClick={() => {
                            handleNotifications("success", "Documento descargado correctamente")
                        }}>Descargar Documento</ButtonCard>
                    )}
                </PDFDownloadLink>
                <ButtonCard>Publicar Documento</ButtonCard>

            </WrapperContainer2>
            
            <PDFViewer style={{width: "100%", height: "100%", minHeight: 500}}>
                <MyExportPDFDocument array={array} graphs={graphImages || []} year={year} month={month}/>
            </PDFViewer>
        </AllInfoGridContainer>
    );
}

export { DocumentPDFFiltersViewer };