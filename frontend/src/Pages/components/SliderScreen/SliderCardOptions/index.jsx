import { MdEdit } from "react-icons/md";
import { AllInfoGridContainer } from "../../AllInfoContainer";
import { ButtonCard } from "../../ButtonCard";
import { SliderCard } from "../../SliderContainer/SliderCard.jsx";
import { WrapperContainer1, WrapperContainer2 } from "../../WrapperContainers";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AppContext } from "../../../../Context/index.jsx";
import React from "react";

const SliderCardOptions = ({item, onEdit, onDelete}) => {
    const context = React.useContext(AppContext);

    return(
        <WrapperContainer1 padding={0} justifyContent="center">
            <AllInfoGridContainer className="grid-175-025">
                <SliderCard item={item}/>

                <WrapperContainer2 flexDirection="column" padding={20} justifyContent="center">
                <ButtonCard 
                    title="Editar Gráfico"
                    onClick={() => onEdit(item)}
                    padding={15}
                >
                    <MdEdit />
                </ButtonCard>
                <ButtonCard
                    title="Eliminar Gráfico"
                    onClick={() => context.setOpenConfirmationModal({
                        status: true,
                        title: "¿Esta seguro que desea eliminar esta información?",
                        onConfirm: () => onDelete(item.id),
                        onCancel: () => context.setOpenConfirmationModal({status:false}),
                    })}
                    padding={15}
                >
                    <RiDeleteBin6Line  />
                </ButtonCard>
                </WrapperContainer2>
            </AllInfoGridContainer>
        </WrapperContainer1>
    );
}

export { SliderCardOptions };