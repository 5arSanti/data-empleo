import { ButtonCard } from "../../ButtonCard";
import { TextCard } from "../../TextComponents";
import { WrapperContainer2 } from "../../WrapperContainers";

const ExcelIncorrectAndDownload = ({onDownload, file}) => {
    return(
        <WrapperContainer2 flexDirection="column">
            <TextCard>¿No puede ver el archivo, o se ve incorrectamente?</TextCard>
            <ButtonCard 
                title={`Descargar ${file?.name}`}
                onClick={() => onDownload(file?.item)}
            >
                Descargar Archivo
            </ButtonCard>
        </WrapperContainer2>
    );
}

export { ExcelIncorrectAndDownload };