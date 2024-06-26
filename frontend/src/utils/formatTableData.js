import { formatTableArray } from "./formatTableArray";
import { formatURL } from "./strings";

const formatTableData = (data, category) => {
    const folderName = formatURL(category) || "";
    const categoryData = data ? data[folderName] : {};

    const formattedData = {};
    
    for (const subFolder in categoryData) {
        formattedData[subFolder] = categoryData ?? formatTableArray(categoryData[subFolder]);
    }

    return formattedData;
}

export { formatTableData }