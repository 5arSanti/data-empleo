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
import { YearAndMonthFilterCard } from "../../YearAndMonthFilterCard";


const DashboardInputsContainer = () => {
    const context = React.useContext(AppContext);

    const grapLabels = Object.keys(graphLabels);
    const monthsArray = Object.keys(getMonthsUntilCurrent(context.graphValues?.year));

    const values = {...context.graphValues}

    const handleSubmit = (event) => {
        context.setLoading(true);
        event.preventDefault();

        if(!context.editingGraph) {
            handlePostData(event, values, "/graph/new");
        } 
        else if(context.editingGraph) {
            axios.patch(`${context.apiUri}/graph`, values)
                .then(response => {
                    const {data} = response;

                    if(data.Status === "Success") {
                        handleNotifications("success", `Gráfica editada correctamente`)
                        reloadLocation();
                    } else {
                        handleNotifications("error", data.Error)
                    }
                })
                .catch(err => {handleNotifications("error", err)})
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

                <YearAndMonthFilterCard
                    state={context.graphValues}
                    setState={context.setGraphValues}
                    id={"graph-values"}
                />


                <OptionInputCard 
                    id={"values-type"} 
                    label={"Tipo de Datos"} 
                    array={grapLabels}
                    onChange={(event) => handleInputChange("grapLabelsType", event, context.setGraphValues)}
                    defaultValue={context.graphValues?.grapLabelsType}
                />
                <OptionInputCard 
                    id={"chart-type"} 
                    label={"Tipo de Gráfico"} 
                    array={chartTypes}
                    onChange={(event) => handleInputChange("graphType", event, context.setGraphValues)}
                    defaultValue={context.graphValues?.graphType}
                />

                <OptionInputCard 
                    none={true}
                    id={"chart-values"} 
                    label={"Datos"} 
                    array={context.responseData?.filterColumns}
                    onChange={(event) => handleInputChange("column", event, context.setDashboardFilters)}
                    defaultValue={context.dashboardFilters?.column}
                />

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