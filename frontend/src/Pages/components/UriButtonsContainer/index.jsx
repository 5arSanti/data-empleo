import React from "react";
import { AppContext } from "../../../Context";
import { WrapperContainer4 } from "../WrapperContainers";
import { UriButtonCard } from "./UriButtonCard";

const UriButtonsContainer = () => {
    const context = React.useContext(AppContext);

    const { folders } = context.responseData || {};

    const array = folders ? Object.keys(folders).filter(item => item != "Home") : [];

    const responsive = context.windowWidth <= 1150 ? true : false;

    return(
        <WrapperContainer4 flexDirection={responsive ? "column" : "row"} justifyContent="center" alignItems={responsive ? "center" : "start"} paddingVertical={20} paddingHorizontal={30}  gap={20}>
            <UriButtonCard item={"Home"}/>
            <UriButtonCard item={"Buscador de empleo"}/>
            
            {array?.map((item, index) => (
                <UriButtonCard key={index} item={item}/>
            ))}
        </WrapperContainer4>
    );
}

export { UriButtonsContainer }