import { useLocation } from 'react-router-dom';
import { removeFirstLetter } from '../../../utils/strings';

import { DateCard } from "../DateCard";


import "./styles.css"
import { DropDownCard } from '../DropDownCard';


const MainContainer = ({children}) => {
    const location = useLocation();
    const text = removeFirstLetter(location.pathname)

    return(
        <div className="main-container">
            <DropDownCard/>
            <DateCard/>

            <div className="home-container">
                {children}
            </div>
        </div>
    );
}

export { MainContainer };