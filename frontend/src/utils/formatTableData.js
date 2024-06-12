import { formatTableArray } from "./formatTableArray";
import { formatURL } from "./strings";

const formatTableData = (data, category) => {
    const folderName = formatURL(category) || "";
    
    const categoryData = data ? data[folderName] : [];

    const formattedData = formatTableArray(categoryData);

    return formattedData;
}

export { formatTableData }