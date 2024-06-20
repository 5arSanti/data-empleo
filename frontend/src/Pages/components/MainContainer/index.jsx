import { useLocation } from 'react-router-dom';
import { removeFirstLetter } from '../../../utils/strings';

import { DateCard } from "../DateCard";


import "./styles.css"
import { DropNav } from '../DropDownCards/DropNav';
import { WrapperContainer2 } from '../WrapperContainers';


const MainContainer = ({children}) => {
    const location = useLocation();
    const text = removeFirstLetter(location.pathname)

    return(
        <div className="main-container">
            <div className="drop-date-container">
                {/* <DropNav/> */}

                <DateCard/>
            </div>

            <div className="home-container">
                <WrapperContainer2 padding={0} flexDirection='column' gap={40}>
                    {children}
                </WrapperContainer2>
            </div>
        </div>
    );
}

export { MainContainer };