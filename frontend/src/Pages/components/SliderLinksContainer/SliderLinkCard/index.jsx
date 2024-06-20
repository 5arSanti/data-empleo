import { useNavigate } from "react-router-dom";

import "./styles.css";
import { TextCard } from "../../TextComponents";

const SliderLinkCard = ({item}) => {
    const navigate = useNavigate();

    const handleLink = () => {
        if (item === "Home") { return navigate(`/home`); }

        return navigate(`/category/${item.replace(/ /g, '_')}`)
    }

    return(
        <div title={item} className='dropnav-button slider-link-button' onClick={handleLink}>
            <TextCard textAlign="center">{item}</TextCard>
        </div>
    );
}

export { SliderLinkCard }