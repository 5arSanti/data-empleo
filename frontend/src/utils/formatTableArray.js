import { months } from "./dateFunctions";

const formatTableArray = (array) => {
    const formattedData = array?.map((item) => ({
        array: [item?.name, `${months[item?.selectedMonth]} del ${item?.selectedYear}`, 'Abrir', 'Descargar'],
        file: item?.fullName,
        link: `file/${item?.selectedOption}/${item?.fullName}/${item?.name}`,
        fileType: item?.fileType, 
        folder: item?.selectedOption,
        item: item,
    }));

    return formattedData.reverse();
} 

export { formatTableArray };