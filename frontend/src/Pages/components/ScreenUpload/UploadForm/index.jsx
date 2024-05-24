import React from "react";
import "./styles.css";
import { AppContext } from "../../../../Context";
import { WrapperContainer1 } from "../../WrapperContainers";
import { SubTitle } from "../../SubTitle";
import { OptionInputCard, UploadFileCard } from "../../InputsCards";
import { ButtonCard } from "../../ButtonCard";
import { handleFileChange } from "../../../../utils/handleFileChange";
import { handlePostFile } from "../../../../utils/handleData/handlePostData";
import { handleInputChange } from "../../../../utils/handleInputChange";
import { handleNotifications } from "../../../../utils/handleNotifications";
import { validateFiles } from "../../../../utils/validate/validateFiles";

const UploadForm = () => {
    const context = React.useContext(AppContext)

    const [values, setValues] = React.useState({
        files: null,
        selectedOption: null,
    });

    const handleFileUpload = async (event) => {
        try {
            event.preventDefault();

            validateFiles(values?.files, values?.selectedOption);
    
            const formData = new FormData();
            for (let i = 0; i < values.files.length; i++) {
                formData.append('file', values.files[i]);
            }
    
            await handlePostFile(event, formData, `/file/upload/${values?.selectedOption}`, console.log, {"selectedOption": values?.selectedOption,});     
        } catch (err) {
            return handleNotifications("error", err.message);
        }
    };

    
    return(
        <WrapperContainer1 padding={30}>
            <form encType="multipart/form-data" className="upload-form-container" onSubmit={handleFileUpload}>
                <SubTitle>
                    Por favor seleccione un archivo
                </SubTitle>
                <UploadFileCard
                    id={"file"}
                    onChange={(event) => handleFileChange(event, ['.xlsx', '.pdf'], setValues)}
                    filesArray={values?.files}
                />


                <OptionInputCard
                    id={"document-type-options"}
                    label={"Seleccione el tipo de Documento a Cargar"}
                    array={context.responseData?.folders}
                    onChange={(event) => {handleInputChange("selectedOption", event, setValues)}}
                    defaultValue={values?.selectedOption}
                    none={true}
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