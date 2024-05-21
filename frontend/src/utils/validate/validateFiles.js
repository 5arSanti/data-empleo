const validateFiles = (values) => {
    if (!(values?.files && values.files.length !== 0 && values.selectedOption)) {
        throw new Error("Por favor, seleccione un archivo y el tipo antes de cargar.");
    }
}

export { validateFiles };