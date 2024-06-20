import React from "react";
import { actualMonth, actualYear } from "../../../utils/dateFunctions";
import { AllInfoGridContainer } from "../AllInfoContainer";
import { WrapperContainer2 } from "../WrapperContainers";
import { Table } from "./Table";
import { YearAndMonthFilterCard } from "../YearAndMonthFilterCard";
import { TextCard } from "../TextComponents";
import { VerifyLength } from "../VerifyLengthWrapper";
import { SubTitle } from "../SubTitle";

const TableContainer = ({title, values=[], onOpen, onDownload, onExcel, onDelete}) => {
    const [filters, setFilters] = React.useState({
        year: actualYear,
        month: actualMonth,
    })

    const filteredData = values && 
        values?.filter(item => (item?.item?.selectedMonth == filters.month) && 
        (item?.item?.selectedYear == filters.year));


    return(
        <WrapperContainer2 flexDirection="column" gap={5} padding={0}>
            <SubTitle>{title}</SubTitle>

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


            <VerifyLength array={filteredData}>
                <Table values={filteredData || []} onOpen={onOpen} onDownload={onDownload} onExcel={onExcel} onDelete={onDelete}/>
            </VerifyLength>
        </WrapperContainer2>
    );
}

export { TableContainer };