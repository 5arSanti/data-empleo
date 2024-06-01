import { useParams } from "react-router-dom";

import { TableContainer } from "../../components/TableContainer";
import { AuthWrapper } from "../../components/AuthWrapper";
import { formatURL } from "../../../utils/strings";

const FoldersDataScreen = ({data}) => {
    const { category } = useParams() || "";
    const categoryData = data ? data[formatURL(category)] : [];

    console.log(formatURL(category));
  
    return (
        <AuthWrapper>
            <TableContainer title={formatURL(category)} values={categoryData}/>
            {categoryData?.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </AuthWrapper>
    );
}

export { FoldersDataScreen };