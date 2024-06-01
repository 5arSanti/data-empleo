import { Title } from "../Title";
import { WrapperContainer2 } from "../WrapperContainers";
import { Table } from "./Table";

const TableContainer = ({title, values, onOpen, onDownload}) => {
    return(
        <WrapperContainer2 flexDirection="column" gap={5} padding={0}>
            <Title color="#000">
                {title}
            </Title>
            <Table values={values || []} onOpen={onOpen} onDownload={onDownload}/>
        </WrapperContainer2>
    );
}

export { TableContainer };