import { formatNumbers } from "../../../../utils/formatNumbers";
import { icons } from "../../../../utils/icons";
import "./styles.css";

const SliderCard = ({item}) => {
    return(
        <div className="slider-card">
            {icons[item?.ICONO]}
            <div className="slider-info-container">
                <p>{item?.NOMBRE}</p>
                <p>{formatNumbers(item?.VALOR)}</p>
                <p>{item?.PORCENTAJE} %</p>
            </div>
        </div>
    );
}

export { SliderCard }