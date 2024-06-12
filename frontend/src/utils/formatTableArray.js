import moment from "moment";

const formatTableArray = (array) => {
    const formattedData = array?.map((item) => ({
        array: [item?.name, moment(item?.date).format("DD/MM/YYYY"), 'Abrir', 'Descargar'],
        file: item?.fullName,
        link: `file/${item?.selectedOption}/${item?.fullName}/${item?.name}`,
        fileType: item?.fileType, 
        folder: item?.selectedOption,
        item: item,
    }));

    return formattedData.reverse();
} 

export { formatTableArray };