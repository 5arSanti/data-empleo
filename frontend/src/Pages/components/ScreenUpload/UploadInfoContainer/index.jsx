import React from "react";

import { icons } from "../../../../utils/icons";
import { WrapperContainer2 } from "../../WrapperContainers";
import { UploadForm } from "../UploadForm";
import { AppContext } from "../../../../Context";
import { SliderInstructionsContainer } from "../../SliderInstructionsContainer";

const UploadInfoContainer = () => {
    const context = React.useContext(AppContext);

    const uploadInstructions = [
        {
            title: "Carga de archivos",
            icon: icons["Documento"],
            instructions: [
                "Ubique el Boton de color vino tinto llamado 'Cargar Archivo' y pulse sobre este.", 
                "Seleccione los archivos que desea cargar y pulse sobre el boton de 'Abrir'",
                "Posterior a esto, podrá ver el nombre de los archivos seleccionados dentro del boton 'Cargar Archivo'"
            ]
        },
        {
            title: "Seleccion de Año y Mes de publicación",
            icon: icons["Calendario"],
            instructions: [
                "Ubique los botones llamados 'Año' y 'Mes' y seleccione el valor correpondiente.",
                "Tenga en cuenta que bajo estos valores será publicado el archivo.",
            ]
        },
        {
            title: "Seleccion del origen de publicación de los archivos",
            icon: icons["Pagina"],
            instructions: [
                "Ubique el boton llamado 'Seleccione donde publicar el archivo' y pulse sobre este.",
                "Seleccione en donde quiere publicar el archivo.",
                "Tenga en cuenta que el archivo será publicado en la pagina correpondiente a su selección."
            ]
        },
        {
            title: "Guardar y publicar",
            icon: icons["Check"],
            instructions: [
                "Una vez finalizado, ubique el boton llamado 'Guardar y Publicar archivo' y pulse sobre este para guardar los archivos cargados en el sistema.",
                "El sistema devolverá una respuesta dependiendo del estado de la acción.",
            ]
        }
    ]

    return(
        <WrapperContainer2 padding={0} flexDirection={context.windowWidth <= 1150 ? "column" : "row"}>
            <UploadForm/>

            <SliderInstructionsContainer array={uploadInstructions}/>
        </WrapperContainer2>
    );
}

export { UploadInfoContainer };