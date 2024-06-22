import React from "react";
import axios from "axios";
import { handleNotifications } from "../../../../utils/handleNotifications";
import { reloadLocation } from "../../../../utils/realoadLocation";
import { WrapperContainer2 } from "../../WrapperContainers";
import { SubTitle } from "../../SubTitle";
import { GraphsCard } from "./GraphsCard";
import { AppContext } from "../../../../Context";
import { VerifyLength } from "../../VerifyLengthWrapper";
import { handleDeleteData } from "../../../../utils/handleData/handleDeleteData";
import { DashboardGraphsPagination } from "../DashboardGraphsPagination";


const DashboardGraphsGrid = () => {
    const context = React.useContext(AppContext);

    const { graphsData } = context.responseData;

    const handleGraphDelete = async (item) => {
        context.setLoading(true);

        await handleDeleteData(item, "/graph");

        context.setLoading(false);
    }

    const handleGraphEdit = (item) => {
        context.setEditingGraph(true);
        handleNotifications("info", `Editando grafica con ID ${item.id}`)

        context.setGraphValues({
            id: item.id,
            title: item.TITULO_GRAFICA,
            year: item.AÑO,
            month: item.MES,
            grapLabelsType: item.TIPO_DATOS,
            graphType: item.TIPO_GRAFICA,
            description: item.DESCRIPCION,
            values: item.DATOS,
        })

        document.documentElement.scrollTo(0, 335)
    }

    return(
        <WrapperContainer2 flexDirection="column" gap={20} padding={0}>
            <SubTitle>Últimas Gráficas Creadas - Pagina {graphsData?.currentPage}</SubTitle>
            
            <VerifyLength array={graphsData?.graphs}>
                <WrapperContainer2 flexDirection="column" gap={15} padding={0}>
                    {graphsData?.graphs?.map((item, index) => (
                        <GraphsCard
                            key={index}
                            item={item}
                            onEdit={handleGraphEdit}
                            onDelete={handleGraphDelete}
                        />
                    ))}
                </WrapperContainer2>
            </VerifyLength>
            <DashboardGraphsPagination graphsData={graphsData}/>
        </WrapperContainer2>
    );
}

export { DashboardGraphsGrid };