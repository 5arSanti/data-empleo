import React from "react";

import { MdEdit } from "react-icons/md";
import { AllInfoGridContainer } from "../../AllInfoContainer";
import { ButtonCard } from "../../ButtonCard";
import { WrapperContainer1, WrapperContainer2 } from "../../WrapperContainers";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AppContext } from "../../../../Context/index.jsx";
import { SliderCard } from "../../SliderNavContainer/SliderCard/index.jsx";
import { DeleteButtonCard } from "../../EditDeleteCard/DeleteButtonCard/index.jsx";

const SliderCardOptions = ({item, onDelete}) => {
    const context = React.useContext(AppContext);

    return(
        <WrapperContainer1 padding={20} justifyContent="center">
            <AllInfoGridContainer className="grid-175-025">
                <SliderCard item={item}/>

                <WrapperContainer2 flexDirection="column" padding={0} justifyContent="center">
                    <DeleteButtonCard item={item} onDelete={onDelete}/>
                </WrapperContainer2>
            </AllInfoGridContainer>
        </WrapperContainer1>
    );
}

export { SliderCardOptions };