import React from "react";

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
import { actualMonth, actualYear } from "../../../../utils/dateFunctions";
import { YearAndMonthFilterCard } from "../../YearAndMonthFilterCard";

import "./styles.css";


const UploadForm = () => {
    const context = React.useContext(AppContext)

    const [values, setValues] = React.useState({
        files: null,
        selectedOption: null,
        year: actualYear,
        month: actualMonth,
    });

    const handleFileUpload = async (event) => {
        try {
            context.setLoading(true);
            
            event.preventDefault();

            validateFiles(values?.files, values?.selectedOption);
    
            const formData = new FormData();
            formData.append("selectedOption", values?.selectedOption)
            formData.append("year", values?.year)
            formData.append("month", values?.month)

            for (let i = 0; i < values.files.length; i++) {
                formData.append('file', values.files[i]);
            }
    
            await handlePostFile(event, formData, "/file/upload");
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
                    id={"file"}
                    onChange={(event) => handleFileChange(event, ['.xlsx', '.pdf'], setValues)}
                    filesArray={values?.files}
                />

                <YearAndMonthFilterCard
                    state={values}
                    setState={setValues}
                    id={"upload"}
                />

                <OptionInputCard
                    id={"document-type-options"}
                    label={"Seleccione donde publicar el archivo"}
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