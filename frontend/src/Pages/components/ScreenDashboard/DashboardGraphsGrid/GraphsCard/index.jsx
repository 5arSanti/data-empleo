import { ScrollableWrapper } from "../../../ScrollableWrapper";
import { months } from "../../../../../utils/dateFunctions";

import { GoGraph } from "react-icons/go";
import { MdBarChart } from "react-icons/md";
import { BiSolidDoughnutChart } from "react-icons/bi";
import { FaChartPie } from "react-icons/fa";
import { PiChartPolarFill } from "react-icons/pi";
import { AiOutlineRadarChart } from "react-icons/ai";

import "./styles.css"
import moment from "moment";
import { SpanCard, TextCard } from "../../../TextComponents";
import { WrapperContainer1, WrapperContainer2 } from "../../../WrapperContainers";
import { EditDeleteCard } from "../../../EditDeleteCard";
import { AllInfoGridContainer } from "../../../AllInfoContainer";


const GraphsCard = ({item={}, onEdit, onDelete}) => {
    const graphSvg = {
        bar: <MdBarChart />,
        doughnut: <BiSolidDoughnutChart />,
        pie: <FaChartPie />,
        line: <GoGraph/>,
        polarArea: <PiChartPolarFill />,
        radar: <AiOutlineRadarChart />, 
    }

    const wrapperConfig = {
        gap: 5,
        flexDirection: "column",
        padding: 0,
    }

    return(
        <WrapperContainer1 padding={0}>
            <AllInfoGridContainer gap={20} padding={20} className="grid-1-auto">
                <WrapperContainer2 flexDirection="column" gap={20} padding={0}>
                    <WrapperContainer2 flexDirection="column" gap={20} padding={0}>
                        <AllInfoGridContainer className="grid-1-1" gap={20}>
                            <WrapperContainer2 {...wrapperConfig}>
                                <TextCard><SpanCard>Titulo:</SpanCard> {item.TITULO_GRAFICA} - {months[item.MES]} del {item.AÑO}</TextCard>
                                <TextCard><SpanCard>Mes:</SpanCard> {months[item.MES]}</TextCard>
                                <TextCard><SpanCard>Año:</SpanCard> {item.AÑO}</TextCard>
                            </WrapperContainer2>
                            <WrapperContainer2 flexDirection="column" gap={5} padding={0} alignItems="start" className="svg-25">
                                <TextCard><SpanCard>Tipo de Datos:</SpanCard> {item.TIPO_DATOS}</TextCard>
                                <TextCard><SpanCard>Tipo de Gráfica:</SpanCard> {item.TIPO_GRAFICA}</TextCard>
                                {graphSvg[item.TIPO_GRAFICA]}
                            </WrapperContainer2>
                        </AllInfoGridContainer>
                        <WrapperContainer2 flexDirection="column" padding={0} gap={0}>
                            <TextCard><SpanCard>Descripción:</SpanCard></TextCard>

                            <ScrollableWrapper maxHeight={100}>
                                <TextCard>{item.DESCRIPCION}</TextCard>
                            </ScrollableWrapper>
                        </WrapperContainer2>
                    </WrapperContainer2>

                    <AllInfoGridContainer className="grid-1-1">
                        <WrapperContainer2 flexDirection="column" alignItems="center" justifyContent="center" gap={0} padding={0}>
                            <TextCard textAlign="center">{item.id}</TextCard>
                            <TextCard textAlign="center"><SpanCard className="font-14">Codigo ID</SpanCard></TextCard>
                        </WrapperContainer2>
                        <WrapperContainer2 flexDirection="column" alignItems="center" justifyContent="center" gap={0} padding={0}>
                            <TextCard textAlign="center">{moment(item.FECHA_CREACION).format("DD/MM/YYYY  HH:MM:ss")}</TextCard>
                            <TextCard textAlign="center"><SpanCard className="font-14">Fecha de Creación</SpanCard></TextCard>
                        </WrapperContainer2>
                    </AllInfoGridContainer>
                </WrapperContainer2>

                <WrapperContainer2 flexDirection="column" gap={20}>
                    <EditDeleteCard item={item} onEdit={onEdit} onDelete={onDelete}/>
                </WrapperContainer2>
            </AllInfoGridContainer>
        </WrapperContainer1>
        
    );
}

export { GraphsCard };