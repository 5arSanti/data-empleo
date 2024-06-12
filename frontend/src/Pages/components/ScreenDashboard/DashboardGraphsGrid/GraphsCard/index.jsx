import React from "react";

import { AppContext } from "../../../../../Context";

import { ScrollableWrapper } from "../../../ScrollableWrapper";
import { months } from "../../../../../utils/dateFunctions";
import { ButtonCard } from "../../../ButtonCard";

import { GoGraph } from "react-icons/go";
import { MdBarChart, MdEdit } from "react-icons/md";
import { BiSolidDoughnutChart } from "react-icons/bi";
import { FaChartPie } from "react-icons/fa";
import { PiChartPolarFill } from "react-icons/pi";
import { AiOutlineRadarChart } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

import "./styles.css"
import moment from "moment";
import { SpanCard, TextCard } from "../../../TextComponents";
import { WrapperContainer1 } from "../../../WrapperContainers";


const GraphsCard = ({item={}, onEdit, onDelete}) => {
    const context = React.useContext(AppContext)

    const graphSvg = {
        bar: <MdBarChart />,
        doughnut: <BiSolidDoughnutChart />,
        pie: <FaChartPie />,
        line: <GoGraph/>,
        polarArea: <PiChartPolarFill />,
        radar: <AiOutlineRadarChart />, 
    }

    return(
        <WrapperContainer1 padding={0}>
            <div className="graph-card-container grid-1-auto gap-20">
                <div className="graph-card-info-container flex-column gap-20">
                    <div className="flex-column gap-20">
                        <div className="grid-1-1 gap-20">
                            <div className="flex-column gap-5">
                                <TextCard><SpanCard>Titulo:</SpanCard> {item.TITULO_GRAFICA} - {months[item.MES]} del {item.AÑO}</TextCard>
                                <TextCard><SpanCard>Mes:</SpanCard> {months[item.MES]}</TextCard>
                                <TextCard><SpanCard>Año:</SpanCard> {item.AÑO}</TextCard>
                            </div>
                            <div className="flex-column gap-5 svg-25">
                                <TextCard><SpanCard>Tipo de Datos:</SpanCard> {item.TIPO_DATOS}</TextCard>
                                <TextCard><SpanCard>Tipo de Gráfica:</SpanCard> {item.TIPO_GRAFICA}</TextCard>
                                {graphSvg[item.TIPO_GRAFICA]}
                            </div>
                        </div>
                        <div className="flex-column">
                            <TextCard><SpanCard>Descripción:</SpanCard></TextCard>
                            <ScrollableWrapper maxHeight={100}>
                                <TextCard>{item.DESCRIPCION}</TextCard>
                            </ScrollableWrapper>
                        </div>
                    </div>

                    <div className="grid-1-1">
                        <div className="flex-column center">
                            <TextCard>{item.id}</TextCard>
                            <TextCard><SpanCard className="font-14">Codigo ID</SpanCard></TextCard>
                        </div>
                        <div className="flex-column center">
                            <TextCard>{moment(item.FECHA_CREACION).format("DD/MM/YYYY  HH:MM:ss")}</TextCard>
                            <TextCard><SpanCard className="font-14">Fecha de Creación</SpanCard></TextCard>
                        </div>
                    </div>
                </div>

                <div className="flex-column center gap-20">
                    <ButtonCard 
                        title="Editar Gráfico"
                        onClick={() => onEdit(item)}
                        padding={15}
                    >
                        <MdEdit />
                    </ButtonCard>
                    <ButtonCard
                        title="Eliminar Gráfico"
                        onClick={() => context.setOpenConfirmationModal({
                            status: true,
                            title: "¿Esta seguro que desea elminar este Gráfico?",
                            onConfirm: () => onDelete(item.id),
                            onCancel: () => context.setOpenConfirmationModal({status:false}),
                        })}
                        padding={15}
                    >
                        <RiDeleteBin6Line  />
                    </ButtonCard>
                </div>
            </div>
        </WrapperContainer1>
        
    );
}

export { GraphsCard };