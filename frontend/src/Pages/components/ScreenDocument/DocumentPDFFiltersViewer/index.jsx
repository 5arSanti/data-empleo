import React from "react";
import { AppContext } from "../../../../Context";
import { getMonthsUntilCurrent, months, yearArray } from "../../../../utils/dateFunctions";
import { AllInfoGridContainer } from "../../AllInfoContainer";
import { WrapperContainer1 } from "../../WrapperContainers";
import { SubTitle } from "../../SubTitle";
import { OptionInputCard } from "../../InputsCards";
import { handleInputChange } from "../../../../utils/handleInputChange";
import { MyExportPDFDocument } from "../MyExportPDFDocument";
import { ButtonCard } from "../../ButtonCard";
import { handleNotifications } from "../../../../utils/handleNotifications";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { YearAndMonthFilterCard } from "../../YearAndMonthFilterCard";


const DocumentPDFFiltersViewer = ({array, graphImages}) => {
    const context = React.useContext(AppContext)

    const monthsArray = Object.keys(getMonthsUntilCurrent(context.filters?.year));
    const year = context.filters?.year;
    const month = context.filters?.month;

    return(
        <AllInfoGridContainer className="grid-125-075">
            <WrapperContainer1
                flexDirection="column"
                padding={30}
                justifyContent="center"
            >
                <SubTitle>Crear documento (En Desarrollo)</SubTitle>

                <YearAndMonthFilterCard
                    state={context.filters}
                    setState={context.setFilters}
                    id={"export"}
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

            </WrapperContainer1>
            
            <PDFViewer style={{width: "100%", height: "100%", minHeight: 500}}>
                <MyExportPDFDocument array={array} graphs={graphImages || []} year={year} month={month}/>
            </PDFViewer>
        </AllInfoGridContainer>
    );
}

export { DocumentPDFFiltersViewer };