import Dropdown from 'react-bootstrap/Dropdown';
import "./styles.css";
import { AllInfoGridContainer } from '../../AllInfoContainer';
import { WrapperContainer2 } from '../../WrapperContainers';

const DropCard = ({title, object}) => {
    const array = Object.keys(object) || null;

    return (
        <WrapperContainer2 padding={0}>
            <Dropdown className="dropdown-card-container">
                <Dropdown.Toggle id="dropdown-card-basic" className='dropdown-card-button'>
                    {title}
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-card-grid-container">
                    {array?.map((item, index) => (
                        <WrapperContainer2 key={index} padding={5}>
                            <AllInfoGridContainer className='grid-075-125'>
                                {object[item]}
                                <p>{item}</p>   
                            </AllInfoGridContainer>
                        </WrapperContainer2>

                    ))}
                </Dropdown.Menu>
            </Dropdown>  
        </WrapperContainer2>

    )
}

export { DropCard };