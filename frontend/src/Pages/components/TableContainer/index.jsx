import React from "react";
import { actualMonth, actualYear, monthsArray, yearArray } from "../../../utils/dateFunctions";
import { handleInputChange } from "../../../utils/handleInputChange";
import { AllInfoGridContainer } from "../AllInfoContainer";
import { OptionInputCard } from "../InputsCards";
import { Title } from "../Title";
import { WrapperContainer2 } from "../WrapperContainers";
import { Table } from "./Table";
import { YearAndMonthFilterCard } from "../YearAndMonthFilterCard";
import { TextCard } from "../TextComponents";

const TableContainer = ({title, values=[], onOpen, onDownload, onExcel, onDelete}) => {
    const [filters, setFilters] = React.useState({
        year: actualYear,
        month: actualMonth,
    })

    const filteredData = values && 
        values?.filter(item => (item?.item?.selectedMonth == filters.month) && 
        (item?.item?.selectedYear == filters.year));


    return(
        <WrapperContainer2 flexDirection="column" gap={10} padding={0}>
            <Title color="#000">
                {title}
            </Title>

            <AllInfoGridContainer className="grid-1-1-1">
                <div></div>
                <WrapperContainer2 flexDirection="row" alignItems="flex-end" padding={10}>
                    <TextCard className="bold" textAlign="end">Filtros:</TextCard>
                </WrapperContainer2>
                <YearAndMonthFilterCard
                    state={filters}
                    setState={setFilters}
                    id={"files-table"}
                />
            </AllInfoGridContainer>


            <Table values={filteredData || []} onOpen={onOpen} onDownload={onDownload} onExcel={onExcel} onDelete={onDelete}/>
        </WrapperContainer2>
    );
}

export { TableContainer };