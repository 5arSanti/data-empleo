import React from "react";
import { SubTitle } from "../SubTitle";
import "./styles.css";
import { AppContext } from "../../../Context";
import { WrapperContainer1 } from "../WrapperContainers";
import { OptionInputCard, UploadFileCard } from "../InputsCards";
import { ButtonCard } from "../ButtonCard";
import { handleNotifications } from "../../../utils/handleNotifications";

const UploadForm = () => {
    const context = React.useContext(AppContext);

    const [file, setFile] = React.useState({
        selectedFile: null,
        name: null,
    })

    const [selectedFile, setSelectedFile] = React.useState(null);
    const [selectedOption, setSelectedOption] = React.useState(null);

	const [selectedFileName, setSelectedFileName] = React.useState(null);

    const handleFileChange = (event) => {
        let file = null;
        file = event.target.files[0];

        if (file) {
            const allowedExtensions = ['.xlsx', '.pdf'];
            const fileExtension = file.name.slice(((file.name.lastIndexOf(".") - 1) >>> 0) + 2);

            if (allowedExtensions.includes(`.${fileExtension}`)) {
                setFile({
                    ...file, 
                    selectedFile: file, 
                    name: file.name
                });
            } else {
                file = null;
				handleNotifications("error", "Por favor, seleccione un archivo .xlsx o .pdf válido.")
                setSelectedFile(null)
                setSelectedFileName(null)
            }
        }
    };

    const handleFileUpload = async (event) => {
        event.preventDefault();
		context.setLoading(true);
		context.setData(null);
        if (selectedFile && selectedOption) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            try {
                const response = await fetch( `${context.apiUri}/files/upload`, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        "selectedOption": selectedOption,
                    }
                });
                const data = await response.json();
				switch (response.status) {
					case 400: context.messageHandler("error", data.message); break;
					case 500: context.messageHandler("error", data.message); break;
					case 200:
						context.messageHandler("all-ok", data.message);
						context.setData(data.rowLog);
					break;
				}

            }
            catch (err) {
				context.messageHandler("error", err.message)
            }
        } else {
			context.messageHandler("error", "Por favor, seleccione un archivo o fuente válido antes de cargar.")
        }
		setSelectedOption(null);
		setSelectedFile(null);
		setSelectedFileName(null);
		context.setLoading(false);
    };

    return(
        <WrapperContainer1 padding={30}>
            <form encType="multipart/form-data" className="upload-form-container">
                <SubTitle>
                    Por favor seleccione un archivo
                </SubTitle>
                <UploadFileCard
                    // selectedFile={}
                    onChange={handleFileChange}
                    description={selectedFileName}
                />

                <OptionInputCard
                    id={"upload-document"}
                    label={"Seleccione el tipo de Documento a Cargar"}
                    array={["Doc1","Doc2","Doc3","Doc4","Doc5"]}
                />

                <ButtonCard 
                    title="Guardar y Publicar Archivo"
                    type="submit"
                >
                    Guardar y Publicar Archivo
                </ButtonCard>
            </form>
        </WrapperContainer1>
        
    )
}

export { UploadForm };