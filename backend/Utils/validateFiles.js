const validateFiles = (file, option) => {
    try {
        validateFile(file);
        validateFileOption(option);
        return;
    } catch (err) {
        throw new Error(err.message);
    }
}

const validateFile = (file) => {
    const message = "Por favor, seleccione un archivo";

    if (!file){
        throw new Error(message);
    }
    if (!(file.length !== 0)) {
        throw new Error(message);
    }
    return;
}

const validateFileOption = (option) => {
    const message = "Por favor, seleccione el lugar de publicación.";

    if (!option) {
        throw new Error(message);
    }
    if (!(option !== "")) {
        throw new Error(message);
    }
    return;
}

module.exports = { validateFiles, validateFile, validateFileOption };