const validateFiles = (file, option) => {
    if (!(file && file.length !== 0 && option)) {
        throw new Error("Por favor, seleccione un archivo y el tipo antes de cargar.");
    }
}

module.exports = { validateFiles };