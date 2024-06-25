import React from "react";
import { handlePostFile } from "../../../../utils/handleData/handlePostData";
import { handleFileChange } from "../../../../utils/handleFileChange";
import { handleNotifications } from "../../../../utils/handleNotifications";
import { validateFile } from "../../../../utils/validate/validateFiles";
import { UploadFileCard } from "../../InputsCards";
import { SubTitle } from "../../SubTitle";
import { WrapperContainer1 } from "../../WrapperContainers";
import { AppContext } from "../../../../Context";
import { ButtonCard } from "../../ButtonCard";

const ProcessCSVForm = () => {
    const context = React.useContext(AppContext);

    const [values, setValues] = React.useState({
        files: null,
    });

    const handleFileUpload = async (event) => {
        try {
            context.setLoading(true);
            
            event.preventDefault();

            validateFile(values?.files);
    
            const formData = new FormData();

            for (let i = 0; i < values.files.length; i++) {
                formData.append('process-file', values.files[i]);
            }
    
            const data = await handlePostFile(event, formData, "/colocaciones", console.log);
            context.setCsvLog(data.csvLog);
        } 
        catch (err) {
            return handleNotifications("error", err.message);
        } finally {
            context.setLoading(false);
        }
    };

    
    return(
        <WrapperContainer1 padding={30} gap={15}>
            <form encType="multipart/form-data" className="upload-form-container" onSubmit={handleFileUpload}>
                <SubTitle>
                    Por favor seleccione un archivo
                </SubTitle>

                <UploadFileCard
                    id={"process-file"}
                    accept=".csv"
                    onChange={(event) => handleFileChange(event, ['.csv'], setValues)}
                    filesArray={values?.files}
                    multiple={false}
                    info="Archivo CSV (.csv)"
                />

                <ButtonCard 
                    title="Guardar y Publicar Archivo"
                    type="submit"
                >
                    Guardar y Publicar Archivo
                </ButtonCard>
            </form>
        </WrapperContainer1>
    );
}

export { ProcessCSVForm };