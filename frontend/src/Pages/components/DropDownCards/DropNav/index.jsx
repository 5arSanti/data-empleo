import Dropdown from 'react-bootstrap/Dropdown';
import { uriDropNav } from '../../../../utils/uriDropNav';

import "./styles.css";
import { IoIosArrowForward } from 'react-icons/io';

const DropNav = () => {
    const array = Object.keys(uriDropNav);

    return (
        <Dropdown className="dropnav-container top-left">
            <Dropdown.Toggle id="dropnav-basic" className='dropnav-button'>
                Informacion Adicional
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropnav-grid-container">
                {array?.map((item, index) => (
                    <div key={index} className='dropnav-anchor-container'>
                        <a href={uriDropNav[item]} target="_blank" rel="noopener noreferrer"><IoIosArrowForward /> {item}</a>
                    </div>
                ))}
            </Dropdown.Menu>
        </Dropdown>  
    )
}

export { DropNav };