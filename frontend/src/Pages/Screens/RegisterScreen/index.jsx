import React from "react";
import axios from "axios";

import { AppContext } from "../../../Context";

import { SubTitle } from "../../components/SubTitle";
import { useNavigate } from "react-router-dom";
import { Title } from "../../components/Title";
import { AuthWrapper } from "../../components/AuthWrapper";
import { handleNotifications } from "../../../utils/handleNotifications";
import { scrollToValue } from "../../../utils/scrollToValue";
import { handleInputChange } from "../../../utils/handleInputChange";
import { InputCard2 } from "../../components/InputsCards";
import { WrapperContainer1 } from "../../components/WrapperContainers";

const RegisterScreen = () => {
    const context = React.useContext(AppContext);

    React.useEffect(() => {
        scrollToValue(0, 350)
    }, [])

    const navigate = useNavigate();

    const [values, setValues] = React.useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!(values.password === values.confirmPassword)) {
            handleNotifications("error", "Las contraseñas no son iguales");
            return;
        }
        
        axios.post(`${context.apiUri}/user/register`, values)
            .then(response => {
                const {data} = response;

                if(data.Status === "Success") {
                    navigate("/login");
                    handleNotifications("success", "Usuario Creado Correctamente")
                } else {
                    handleNotifications("error", data.Error)
                }
            })
            .catch(err => {
                handleNotifications("error", err.message)})
    }

    return(
		<AuthWrapper>
			<Title>
				Registrar Nuevo Usuario Administrador
			</Title>
            
			<div className="login-container">
				<SubTitle
                    textAlign="center"
				>
					Registro
				</SubTitle>

				<form className="login-form-container" onSubmit={handleSubmit}>
                    <InputCard2
                        id={"name"}
                        label={"Name:"}
                        placeholder="Ingrese su nombre"
                        onChange={(event) => handleInputChange("name", event, setValues)}
                        defaultValue={values?.name}
                    />
                    <InputCard2
                        type="email"
                        id={"email"}
                        label={"Correo:"}
                        placeholder="Ingrese su correo"
                        onChange={(event) => handleInputChange("email", event, setValues)}
                        defaultValue={values?.email}
                    />
                    <InputCard2
                        type="password"
                        id={"password"}
                        label={"Contraseña:"}
                        placeholder="Ingrese su contraseña"
                        onChange={(event) => handleInputChange("password", event, setValues)}
                        defaultValue={values?.password}
                    />
                    <InputCard2
                        type="password"
                        id={"confirm-password"}
                        label={"Confirmar Contraseña:"}
                        placeholder="Ingrese su contraseña"
                        onChange={(event) => handleInputChange("confirmPassword", event, setValues)}
                        defaultValue={values?.confirmPassword}
                    />
                    
					<button type="submit">Registrarse</button>
				</form>
			</div>
		</AuthWrapper>
    );
}

export { RegisterScreen }