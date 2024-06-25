import { AllInfoGridContainer } from "../../AllInfoContainer";
import { ScrollableWrapper } from "../../ScrollableWrapper";
import { SubTitle } from "../../SubTitle";
import { SpanCard, TextCard } from "../../TextComponents";
import { VerifyLength } from "../../VerifyLengthWrapper";
import { WrapperContainer1, WrapperContainer2 } from "../../WrapperContainers";

const CsvLogCard = ({state}) => {
    if (!state) { return; }

    const data = state || {};

    return(
        <WrapperContainer1 flexDirection="column" padding={30}>
            <AllInfoGridContainer className="grid-075-125" padding={0}>
                <WrapperContainer2 flexDirection="column" padding={0}>
                    <SubTitle>Información del archivo procesado</SubTitle>
                    <TextCard><SpanCard>Numero total de registros: </SpanCard>{data?.totalRows}</TextCard>
                    <TextCard><SpanCard>Numero total de registros correctos: </SpanCard>{data?.correctRowsCount}</TextCard>
                    <TextCard><SpanCard>Numero total de registros incorrectos: </SpanCard>{data?.incorrectRowsCount}</TextCard>
                    <TextCard><SpanCard>Errores encontrados: </SpanCard>{data?.errors}</TextCard>
                </WrapperContainer2>

                <WrapperContainer2 flexDirection="column" padding={0}>
                    <SubTitle>Registros incorrectos</SubTitle>

                    <WrapperContainer2 flexDirection="column" padding={0} gap={0}>
                        <VerifyLength array={data?.incorrectRows}>
                            {data?.incorrectRows?.map((item, index) => (
                                <TextCard key={index} fontSize={14}>Registro incorrecto en la fila {item.index}</TextCard>
                            ))}
                        </VerifyLength>
                    </WrapperContainer2>
                    

                </WrapperContainer2>

            </AllInfoGridContainer>
        </WrapperContainer1>
    );
}

export { CsvLogCard };