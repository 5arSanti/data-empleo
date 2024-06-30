import React from "react";
import axios from "axios";

import { AppContext } from "../../../../Context";
import { chartTypes, graphLabels } from "../../../../utils/chartTypes";
import { getMonthsUntilCurrent, yearArray } from "../../../../utils/dateFunctions";
import { handlePostData } from "../../../../utils/handleData/handlePostData";
import { handleNotifications } from "../../../../utils/handleNotifications";
import { reloadLocation } from "../../../../utils/realoadLocation";
import { WrapperContainer2 } from "../../WrapperContainers";
import { SubTitle } from "../../SubTitle";
import { InputCard, OptionInputCard, TextAreaCard } from "../../InputsCards";
import { AllInfoGridContainer } from "../../AllInfoContainer";
import { handleInputChange } from "../../../../utils/handleInputChange";
import { ButtonCard } from "../../ButtonCard";
import { handlePatchData } from "../../../../utils/handleData/handlePatchData";


const DashboardInputsContainer = () => {
    const context = React.useContext(AppContext);

    const monthsArray = Object.keys(getMonthsUntilCurrent(context.dashboardFilters?.anio_coloca));

    const values = {...context.graphValues}

    const handleSubmit = async (event) => {
        event.preventDefault();
        context.setLoading(true);

        if(!context.editingGraph) {
            await handlePostData(event, values, "/graph/new");
        } 
        else if(context.editingGraph) {
            await handlePatchData(event, values, "/graph");
        }
        context.setLoading(false);
    }

    
    return(
        <form id="dashboard-inputs-form">
            <WrapperContainer2
                flexDirection="column"
                padding={10}
                gap={20}
            >
                <SubTitle>
                    {!context.editingGraph ? "Información del Gráfico" : `Editando el Gráfico con Codigo ID ${values.id}` }
                </SubTitle>

                <InputCard 
                    type="text" 
                    id={"graph-title"} 
                    label={"Titulo del Grafico"} 
                    placeholder="Título"
                    onChange={(event) => handleInputChange("title", event, context.setGraphValues)}
                    defaultValue={context.graphValues?.title}
                />

                {/* <YearAndMonthFilterCard state={context.graphValues} setState={context.setGraphValues} id={"graph-values"}/> */}

                <AllInfoGridContainer className="grid-1-1">
                    <OptionInputCard 
                        id={`graph-values-year`} 
                        label={"Año"} 
                        array={yearArray}
                        onChange={(event) => handleInputChange("anio_coloca", event, context.setDashboardFilters)}
                        defaultValue={context.dashboardFilters?.anio_coloca}
                    />
                    <OptionInputCard 
                        id={`graph-values-month`} 
                        label={"Mes"} 
                        array={monthsArray}
                        onChange={(event) => handleInputChange("mes_coloca", event, context.setDashboardFilters)}
                        defaultValue={context.dashboardFilters?.mes_coloca}
                    />
                </AllInfoGridContainer>

                <OptionInputCard 
                    none={true}
                    id={"chart-values"} 
                    label={"Tipo de datos"} 
                    array={context.responseData?.filterColumns}
                    onChange={(event) => handleInputChange("column", event, context.setDashboardFilters)}
                    defaultValue={context.dashboardFilters?.column}
                />

                <AllInfoGridContainer className="grid-1-1">
                    <OptionInputCard 
                        id={"chart-type"} 
                        label={"Tipo de Gráfico"} 
                        array={chartTypes}
                        onChange={(event) => handleInputChange("graphType", event, context.setGraphValues)}
                        defaultValue={context.graphValues?.graphType}
                    />
                    <OptionInputCard 
                        id={"chart-direction"} 
                        label={"Dirección del gráfico"} 
                        array={["x", "y"]}
                        onChange={(event) => handleInputChange("indexAxis", event, context.setGraphValues)}
                        defaultValue={context.graphValues?.indexAxis}
                    />
                </AllInfoGridContainer>

                <TextAreaCard 
                    id={"graph-description"} 
                    label={"Descripción"} 
                    placeholder="Descripción"
                    onChange={(event) => handleInputChange("description", event, context.setGraphValues)}
                    defaultValue={context.graphValues?.description}
                />

                <ButtonCard
                    title="Guardar Información"
                    onClick={() => context.setOpenConfirmationModal({
                        status: true,
                        title: "¿Desea Guardar la Gráfica con esta información?",
                        onConfirm: handleSubmit,
                        onCancel: () => context.setOpenConfirmationModal({status: false}),
                    })}
                >
                    Guardar Gráfico
                </ButtonCard>
                
            </WrapperContainer2>
        </form>
        
    );
}

export { DashboardInputsContainer };