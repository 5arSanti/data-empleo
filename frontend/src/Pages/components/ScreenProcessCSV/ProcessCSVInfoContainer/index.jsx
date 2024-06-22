import React from "react";
import { icons } from "../../../../utils/icons";
import { SliderInstructionsContainer } from "../../SliderInstructionsContainer";
import { WrapperContainer2 } from "../../WrapperContainers";
import { ProcessCSVForm } from "../ProcessCSVForm";
import { AppContext } from "../../../../Context";

const ProcessCSVInfoContainer = () => {
    const context = React.useContext(AppContext);

    const uploadInstructions = [
        {
            title: "Carga de archivos",
            icon: icons["Documento"],
            instructions: [
                "Ubique el Boton de color vino tinto llamado 'Cargar Archivo' y pulse sobre este.", 
                "Seleccione el archivo que desea cargar y pulse sobre el boton de 'Abrir'",
                "Posterior a esto, podrá ver el nombre del archivo seleccionado dentro del boton 'Cargar Archivo'"
            ]
        },
        {
            title: "Guardar y publicar",
            icon: icons["Proceso"],
            instructions: [
                "Una vez finalizado, ubique el boton llamado 'Guardar y Publicar archivo' y pulse sobre este para enviar el archivo al sistema.",
                "El sistema indicará el estado de carga, y el registro de control una vez finalice el proceso.",
            ]
        }
    ]

    return(
        <WrapperContainer2 padding={0} flexDirection={context.windowWidth <= 1150 ? "column" : "row"}>
            <SliderInstructionsContainer array={uploadInstructions}/>
            
            <ProcessCSVForm/>
        </WrapperContainer2>
    );
}

export { ProcessCSVInfoContainer };