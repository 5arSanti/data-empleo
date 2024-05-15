import React from "react";
import { AppContext } from "../../../../Context";
import { WrapperContainer2 } from "../../WrapperContainers";
import { UsersCard } from "../UsersCard";

import { Link, useNavigate } from "react-router-dom";
import { ButtonCard } from "../../ButtonCard";

const UsersGrid = () => {
    const context = React.useContext(AppContext);

    const navigate = useNavigate()

    return(
        <WrapperContainer2 flexDirection="column" gap={20}>
            <ButtonCard 
                title="Crear usuario"
                onClick={() => navigate("/register")}
            >
                Crear Usuario
            </ButtonCard>


            {context.responseData?.users?.map((item, index) => (
                <UsersCard key={index} item={item}/>
            ))}
        </WrapperContainer2>
    );
} 

export { UsersGrid}