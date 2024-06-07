import React from "react";

import { AppContext } from "../../../../Context";

import { WrapperContainer2 } from "../../WrapperContainers";
import { ButtonCard } from "../../ButtonCard";
import { handlePagination } from "../../../../utils/handlePagination";
import { PaginationInputText } from "./PaginationInputText";

import { MdFirstPage } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdLastPage } from "react-icons/md";
import { scrollToValue } from "../../../../utils/scrollToValue";

import "./styles.css";

const DashboardGraphsPagination = () => {
    const context = React.useContext(AppContext);

    const { graphsData } = context.responseData || null;

    const paginateTo = (type="") => {
        scrollToValue(0, 1300)
        handlePagination(type, context.setCurrentGraphsPage, graphsData?.totalPages)
    }

    return(
        <WrapperContainer2 padding={0} className="graph-pagination-buttons">
            <ButtonCard
                title="Volver a la primera pagina"
                onClick={() => paginateTo("home")}
                padding={15}
            >
                <MdFirstPage/>
            </ButtonCard>
            <ButtonCard
                title="Página anterior"
                onClick={() => paginateTo("back")}
                padding={15}
            >
                <IoIosArrowBack/>
            </ButtonCard>

            <PaginationInputText
                data={graphsData}
                setState={context.setCurrentGraphsPage}
            />

            <ButtonCard
                title="Siguiente página"
                onClick={() => paginateTo("next")}
                padding={15}
            >
                <IoIosArrowForward/>
            </ButtonCard>

            <ButtonCard
                title="Ir a la ultima página"
                onClick={() => paginateTo("last")}
                padding={15}
            >
                <MdLastPage/>
            </ButtonCard>
        </WrapperContainer2>
    );
}

export { DashboardGraphsPagination };