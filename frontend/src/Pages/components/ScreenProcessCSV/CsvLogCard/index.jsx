import { AllInfoGridContainer } from "../../AllInfoContainer";
import { ScrollableWrapper } from "../../ScrollableWrapper";
import { SubTitle } from "../../SubTitle";
import { SpanCard, TextCard } from "../../TextComponents";
import { VerifyLength } from "../../VerifyLengthWrapper";
import { WrapperContainer1, WrapperContainer2 } from "../../WrapperContainers";

const CsvLogCard = ({item={}}) => {
    if (!item) { return; }

    const incorrectRowsArray = item?.incorrectRows != "" ? item?.incorrectRows.split(",") : null;

    return(
        <WrapperContainer1 flexDirection="column" padding={30}>
            <AllInfoGridContainer className="grid-1-1" padding={0}>
                <WrapperContainer2 flexDirection="column" padding={0}>
                    <SubTitle>Información del archivo procesado</SubTitle>
                
                    <TextCard><SpanCard>Nombre del Archivo: </SpanCard>{item?.fileName}</TextCard>
                    <TextCard><SpanCard>Numero total de registros: </SpanCard>{item?.totalRows}</TextCard>
                    <TextCard><SpanCard>Numero total de registros correctos: </SpanCard>{item?.correctRowsCount}</TextCard>
                    <TextCard><SpanCard>Numero total de registros incorrectos: </SpanCard>{item?.incorrectRowsCount}</TextCard>
                    <TextCard><SpanCard>Errores encontrados: </SpanCard>{item?.errors}</TextCard>
                    <TextCard><SpanCard>Fecha de inicio: </SpanCard>{item?.startDate}</TextCard>
                    <TextCard><SpanCard>Decha de finalización: </SpanCard>{item?.endDate}</TextCard>
                </WrapperContainer2>

                <VerifyLength array={incorrectRowsArray}>
                    <WrapperContainer2 flexDirection="column" padding={0}>

                        <WrapperContainer2 flexDirection="column" padding={0} gap={0}>
                            <SubTitle>Registros incorrectos</SubTitle>
                                {incorrectRowsArray?.map((item, index) => (
                                    <TextCard key={index} fontSize={14}>Registro incorrecto en la fila {item}</TextCard>
                                ))}
                        </WrapperContainer2>
                    </WrapperContainer2>
                </VerifyLength>

            </AllInfoGridContainer>
        </WrapperContainer1>
    );
}

export { CsvLogCard };