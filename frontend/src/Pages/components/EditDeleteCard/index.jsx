import React from "react";
import { AppContext } from "../../../Context";
import { ButtonCard } from "../ButtonCard";
import { WrapperContainer2 } from "../WrapperContainers";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";

const EditDeleteCard = ({item, onEdit, onDelete}) => {
    const context = React.useContext(AppContext);

    return(
        <WrapperContainer2 flexDirection="column" padding={20} justifyContent="center">
            <ButtonCard 
                title="Editar"
                onClick={() => onEdit(item)}
                padding={15}
            >
                <MdEdit />
            </ButtonCard>
            <ButtonCard
                title="Eliminar"
                onClick={() => context.setOpenConfirmationModal({
                    status: true,
                    title: "¿Esta seguro que desea eliminar esta información?",
                    onConfirm: () => onDelete(item),
                    onCancel: () => context.setOpenConfirmationModal({status:false}),
                })}
                padding={15}
            >
                <RiDeleteBin6Line  />
            </ButtonCard>
        </WrapperContainer2>
    );
}

export { EditDeleteCard };