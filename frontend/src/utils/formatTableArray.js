const formatTableArray = (array) => {
    const formattedData = array?.map((item) => ({
        array: [item?.name, item?.date, 'Abrir', 'Descargar'],
        file: item?.fullName,
        link: `file/${item?.selectedOption}/${item?.fullName}/${item?.name}`,
        fileType: item?.fileType, 
    }));

    return formattedData;
} 

export { formatTableArray };