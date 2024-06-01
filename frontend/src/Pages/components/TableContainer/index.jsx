import { Title } from "../Title";
import { WrapperContainer2 } from "../WrapperContainers";
import { Table } from "./Table";

const TableContainer = ({title, values}) => {
    return(
        <WrapperContainer2 flexDirection="column" gap={5} padding={0}>
            <Title color="#000">
                {title}
            </Title>
            <Table values={values || values}/>
        </WrapperContainer2>
    );
}

export { TableContainer };